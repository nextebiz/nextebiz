<?php

namespace App\Http\Controllers\MyAdmin;

use Inertia\Inertia;
use App\Models\Country;
use App\Models\JobPost;
use App\Models\JobCategory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreJobPostRequest;
use App\Http\Requests\UpdateJobPostRequest;
use App\Models\JobpostUser;

class JobPostController extends Controller
{

    public function openPositions()
    {

        $categories = JobCategory::with(['jobPosts' => function ($query) {
            return $query;
        }])->get();

        return Inertia::render("Career/Index")->with(['categories' => $categories]);
    }

    public function shareJobPost(JobPost $jobpost)
    {

        $category = $jobpost->jobCategory()->first();

        return view('jobpost.details')->with(['jobpost' => $jobpost, 'category' => $category->title]);
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
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $jobposts = JobPost::with('jobCategory')->orderBy('id', 'desc')->paginate(10);

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
}
