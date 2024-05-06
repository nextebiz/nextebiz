<?php

namespace App\Http\Controllers\Candidate\Auth;

use Carbon\Carbon;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Country;
use App\Models\JobPost;
use App\Jobs\SendEmailJob;
use App\Models\JobpostUser;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use App\Jobs\SendWelcomeEmailJob;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;

class CandidateRegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        $countries = Country::all();
        return Inertia::render('Candidate/Auth/Register')->with(['countries' => $countries]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {

        $datetime = new \DateTime('now');
        $date =  Carbon::parse($datetime)->format('d-m-y-H-i-s');

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'phone' => ['required', 'min:5'],
            'country' => ['required'],
            'resume_file' => 'required|file|mimes:pdf,doc,docx|max:10240', // 10MB limit (10240 KB)
        ], [
            'resume_file' => 'File must be PDF or MS Doc file and size must be less than 10mb'
        ]);

        $jobpostid =  $request->input('jobpostid');

        $filename = '-';

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
            'country' => $request->country,
        ]);

        if ($request->file('resume_file')->isValid()) {

            $user->addMediaFromRequest("resume_file")->toMediaCollection('docs', 'media');
        }
        $role = $user->assignRole('candidate');

        event(new Registered($user));

        $subject = "Welcome to " . config('app.company') . " - Your Journey Starts Here!";

        $content = "<p>Welcome aboard! We are thrilled to have you join " . config('app.company') . ", where innovation and technology converge to create meaningful solutions.</p>";
        $content .= "<p>As a technology-based company, we are constantly pushing the boundaries of what's possible, and we're excited to embark on this journey with you.</p>";
        $content .= "<p>Your decision to apply for a position with us reflects your passion for technology and your desire to be a part of something truly transformative. We believe that your skills and expertise will contribute significantly to our mission of transforming ideas into impactful solutions.</p>";
        $content .= "<p>Here at " . config('app.company') . ", we foster a culture of collaboration, creativity, and continuous learning. We encourage you to bring your unique perspectives and ideas to the table, as we work together to solve complex challenges and drive innovation forward.</p>";
        $content .= "<p>To get started, please take a moment to explore our website and familiarize yourself with our products, services, and company culture. You can also connect with us on our social media channels to stay updated on the latest news and events.</p>";
        $content .= "<p>If you have any questions or need assistance at any point during the application process, please don't hesitate to reach out to us. We're here to support you every step of the way.</p>";
        $content .= "<p>Once again, welcome to the " . config('app.company') . " family! We're excited to see where this journey takes us together.</p>";

        dispatch(new SendWelcomeEmailJob($user, $subject, $content));

        Auth::login($user);


        if ($jobpostid > 0) {

            // $find_job =  JobpostUser::where('user_id', '=', $user->id)->first();

            JobpostUser::create([
                'jobpost_id' => $jobpostid,
                'user_id' => $user->id
            ]);

            $jobpost = JobPost::where('id', '=', $jobpostid)->first();

            $user = Auth::user();
            $subject = "Your Successful Application for " . $jobpost->title;

            $content = "<p>I hope this email finds you well.</p>";
            $content .= "<p>We are writing to confirm the successful submission of your application for the position of " . $jobpost->title . ". We have received your application and are currently reviewing it carefully.</p>";
            $content .= "<p>Should your qualifications and experience align with our requirements, we will reach out to you to discuss the next steps in the hiring process. In the meantime, please feel free to reach out if you have any questions or need further assistance.</p>";
            $content .= "<p>We appreciate your interest in joining our team and look forward to the possibility of working together.</p>";
            $content .= "<a class='' href='" . config('app.url') . "/jobs/" . $jobpost->slug . "'>View Job: " . $jobpost->title . "</a>";

            dispatch(new SendEmailJob($user, $subject, $content));
        }

        return redirect(route('candidate.index', absolute: false));
    }
}
