<?php

namespace App\Http\Controllers\MyAdmin;

use App\Jobs\SendEmailJob;
use Inertia\Inertia;
use App\Models\Country;
use App\Models\JobPost;
use App\Models\JobCategory;
use App\Models\JobpostUser;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreJobPostRequest;
use App\Http\Requests\UpdateJobPostRequest;
use App\Http\Requests\StoreJobpostUserRequest;
use App\Models\User;

class JobPostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $jobposts = JobPost::with(['jobCategory'])
            ->withCount('users')
            ->orderBy('id', 'desc')
            ->paginate(10);

        // dd($jobposts->toArray());
        // foreach ($jobposts as $p) {
        //     dump($p->countJobs());
        // }

        // $jobposts = JobPost::with(['jobCategory'])
        //     // ->whereRelation('jobCategory', 'id', '!=', 1)
        //     ->orderBy('id', 'desc')
        //     ->paginate(10);


        // $jobposts = JobPost::with(['jobCategory' => function ($query) {
        //     return $query->where('title', 'like', '%Social%');
        // }])->orderBy('id', 'desc')->paginate(10);

        return Inertia::render('MyAdmin/JobPosts/Index')->with(['jobposts' => $jobposts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $jobcategories = JobCategory::select(['id', 'title', 'enabled'])->get();
        return Inertia::render('MyAdmin/JobPosts/Create')->with(['jobcategories' => $jobcategories]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreJobPostRequest $request)
    {
        // dd($request->all());

        $cities = $request->input('cities');
        $cities_array = explode(',', $cities);

        JobPost::create([
            'job_category_id' => $request->input('job_category_id'),
            'title' => $request->input('title'),
            'featured' => $request->input('featured'),
            'description' => $request->input('description'),
            'small_description' => $request->input('small_description'),
            'cities' => $cities_array,
            'job_type' => $request->input('job_type'),
            'working_hours' => $request->input('working_hours'),
            'candidates_required' => $request->input('candidates_required')
        ]);

        return to_route('myadmin.jobposts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(JobPost $jobpost)
    {
        dd('show Job Post');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(JobPost $jobpost)
    {
        // $jobposts = JobPost::orderBy('id', 'desc')->paginate(10);
        $jobcategories = JobCategory::select(['id', 'title', 'enabled'])->get();
        return Inertia::render('MyAdmin/JobPosts/Edit')->with(['jobpost' => $jobpost, 'jobcategories' => $jobcategories]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateJobPostRequest $request, JobPost $jobpost)
    {
        $cities = $request->input('cities');
        $cities_array = explode(',', $cities);

        $jobpost->update([
            'job_category_id' => $request->input('job_category_id'),
            'title' => $request->input('title'),
            'featured' => $request->input('featured'),
            'description' => $request->input('description'),
            'small_description' => $request->input('small_description'),
            'cities' => $cities_array,
            'job_type' => $request->input('job_type'),
            'working_hours' => $request->input('working_hours'),
            'candidates_required' => $request->input('candidates_required')
        ]);

        return to_route('myadmin.jobposts.index');
        // return to_route(route('myadmin.jobposts.index'));

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(JobPost $jobpost)
    {
        $jobpost->delete();
        return to_route('myadmin.jobposts.index');
    }

    public function openPositions()
    {

        $user_id = Auth::user()?->id;
        $jobpostuser = [];

        if ($user_id > 0) {
            $jobpostuser = JobpostUser::where([
                ['user_id', '=', $user_id],
            ])->select(['jobpost_id'])->pluck('jobpost_id')->toArray();
        }

        $categories = JobCategory::with(['jobPosts' => function ($query) {
            return $query;
        }])->get();

        return Inertia::render("Career/Index")->with(['categories' => $categories, 'jobpostuser' => $jobpostuser]);
    }

    public function shareJobPost(JobPost $jobpost)
    {

        $category = $jobpost->jobCategory()->first();

        return view('jobpost.details')->with(['jobpost' => $jobpost, 'category' => $category->title]);
    }

    public function applyjob(StoreJobpostUserRequest $request)
    {
        JobpostUser::create([
            'jobpost_id' => $request->input('jobpost_id'),
            'user_id' => $request->input('user_id'),
        ]);


        $jobpost = JobPost::where('id', '=', $request->input('jobpost_id'))->first();

        $user = Auth::user();
        $subject = "Your Successful Application for " . $jobpost->title;

        $content = "<p>I hope this email finds you well.</p>";
        $content .= "<p>We are writing to confirm the successful submission of your application for the position of " . $jobpost->title . ". We have received your application and are currently reviewing it carefully.</p>";
        $content .= "<p>Should your qualifications and experience align with our requirements, we will reach out to you to discuss the next steps in the hiring process. In the meantime, please feel free to reach out if you have any questions or need further assistance.</p>";
        $content .= "<p>We appreciate your interest in joining our team and look forward to the possibility of working together.</p>";
        $content .= "<a class='' href='" . config('app.url') . "/jobs/" . $jobpost->slug . "'>View Job: " . $jobpost->title . "</a>";

        dispatch(new SendEmailJob($user, $subject, $content));

        $ref = $request->headers->get('referer');

        return redirect()->to($ref);
    }

    public function displayJobPost(JobPost $jobpost)
    {
        $applied = false;

        if (Auth::user()) {
            $user_id = Auth::user()->id;
            $check_applied  = JobpostUser::where(
                [
                    ['user_id', '=', $user_id],
                    ['jobpost_id', '=', $jobpost->id]
                ]
            )->first();
            if ($check_applied) {
                $applied = true;
            }
        }
        $countries = Country::all();
        $category = $jobpost->jobCategory()->first();
        return Inertia::render('Career/DisplayJob')->with([
            'jobpost' => $jobpost,
            'category' => $category->title,
            'countries' => $countries,
            'applied' => $applied
        ]);
    }

    public function applicants(JobPost $jobpost)
    {
        $jobpostusers = JobpostUser::with('user')->where('jobpost_id', '=', $jobpost->id)->paginate(10);

        return Inertia::render('MyAdmin/JobPosts/Applicants')->with(['jobpost' => $jobpost, 'jobpostusers' => $jobpostusers]);
    }
}
