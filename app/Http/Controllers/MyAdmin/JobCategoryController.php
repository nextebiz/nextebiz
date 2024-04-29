<?php

namespace App\Http\Controllers\MyAdmin;

use App\Models\JobCategory;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreJobCategoryRequest;
use App\Http\Requests\UpdateJobCategoryRequest;
use Inertia\Inertia;

class JobCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $jobcategories = JobCategory::all();
        return Inertia::render('MyAdmin/JobCategories/Index')->with(['jobcategories' => $jobcategories]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('MyAdmin/JobCategories/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreJobCategoryRequest $request)
    {

        JobCategory::create([
            'title' => $request->input('title'),
            'min' => $request->input('min'),
            'max' => $request->input('max'),
            'enabled' => $request->input('enabled'),
        ]);

        return to_route('myadmin.jobcategories.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(JobCategory $jobcategory)
    {
        // dd($jobcategory);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(JobCategory $jobcategory)
    {
        return Inertia::render('MyAdmin/JobCategories/Edit')->with(['jobcategory' => $jobcategory]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateJobCategoryRequest $request, JobCategory $jobcategory)
    {
        $jobcategory->update([
            'title' => $request->input('title'),
            'min' => $request->input('min'),
            'max' => $request->input('max'),
            'enabled' => $request->input('enabled'),
        ]);

        return to_route('myadmin.jobcategories.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(JobCategory $jobcategory)
    {
        $jobcategory->delete();
        return to_route('myadmin.jobcategories.index');
    }
}
