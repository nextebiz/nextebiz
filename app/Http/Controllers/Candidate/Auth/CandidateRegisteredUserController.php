<?php

namespace App\Http\Controllers\Candidate\Auth;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Country;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use App\Models\JobpostUser;
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

        if ($request->file('resume_file')->isValid()) {
            // Generate a unique filename
            $filename = uniqid() . '.' . $request->file('resume_file')->getClientOriginalExtension();

            // Save the file to the "resume" folder within the storage directory
            $path = $request->file('resume_file')->storeAs('public/resume', $filename);

            // File has been uploaded successfully
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
            'country' => $request->country,
            'resume_file' => $filename
            // 'enabled' => 0
        ]);

        if ($jobpostid > 0) {

            // $find_job =  JobpostUser::where('user_id', '=', $user->id)->first();

            JobpostUser::create([
                'jobpost_id' => $jobpostid,
                'user_id' => $user->id
            ]);
        }


        $role = $user->assignRole('candidate');

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('candidate.index', absolute: false));
    }
}
