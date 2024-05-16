<?php

namespace App\Http\Controllers\MyAdmin;

use App\Models\JobCategory;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreJobCategoryRequest;
use App\Http\Requests\UpdateJobCategoryRequest;
use Inertia\Inertia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class JobCategoryController extends Controller
{
    public function media_delete(JobCategory $jobcategory, Media $media)
    {

        if ($jobcategory->default_image_url == $media->original_url) {
            $jobcategory->update([
                'default_image_url' => ''
            ]);
        }
        $media->delete();

        return to_route('myadmin.jobcategories.edit', ['jobcategory' => $jobcategory->slug]);
        // return  redirect()->to(route('myadmin.jobcategories.edit', ['jobcategory' => $jobcategory->slug]));
    }
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

        // $picture = $request->file('picture');

        $jobcategory = JobCategory::create([
            'title' => $request->input('title'),
            'min' => $request->input('min'),
            'max' => $request->input('max'),
            'monthly' => $request->input('monthly'),
            'quarterly' => $request->input('quarterly'),
            'small_description' => '', //$request->input('small_description'),
            'description' => '', //$request->input('description'),
            'enabled' => $request->input('enabled'),
        ]);

        // if ($jobcategory) {
        //     if ($picture) {
        //         $jobcategory->addMediaFromRequest('picture')->toMediaCollection("images", 'media_jobcategory');
        //     }
        // }

        if ($jobcategory) {
            if ($request->file('pictures')) {
                foreach ($request->file('pictures') as $photo) {
                    $jobcategory->addMedia($photo)->toMediaCollection('images', 'media');
                }
            }
        }

        return to_route('myadmin.jobcategories.edit', ['jobcategory' => $jobcategory->slug]);
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


        // dd($jobcategory);
        // $media = '';

        // $find_media = $jobcategory->getFirstMediaUrl('images');
        // if ($find_media) {
        //     $media = $find_media;
        // }

        // $jobcategory = JobCategory::with('media')->where(['slug', '=', $jobcategory->slug])->first();
        $jobcategory = JobCategory::with('media')->where('slug', '=', $jobcategory->slug)->first();

        // dd($jobcategory);

        return Inertia::render('MyAdmin/JobCategories/Edit')->with(['jobcategory' => $jobcategory]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateJobCategoryRequest $request, JobCategory $jobcategory)
    {

        // dd($request->all());
        $picture = $request->file('picture');


        // dd($request->input('default_image_url'));

        $result =  $jobcategory->update([
            'title' => $request->input('title'),
            'min' => $request->input('min'),
            'max' => $request->input('max'),
            'monthly' => $request->input('monthly'),
            'quarterly' => $request->input('quarterly'),
            'small_description' => $request->input('small_description'),
            'description' => $request->input('description'),
            'enabled' => $request->input('enabled'),
            'default_image_url' => $request->input('default_image_url') == null ? '' : $request->input('default_image_url'),
            'gallerystyle' => $request->input('gallerystyle'),
            'galleryimages' => json_encode($request->input('galleryimages')),
        ]);

        // if ($jobcategory) {
        //     if ($picture) {

        //         $media = $jobcategory->getFirstMedia('images');
        //         if ($media) {
        //             $media->delete();
        //         }

        //         $jobcategory->addMediaFromRequest('picture')->toMediaCollection("images", 'media_jobcategory');
        //     }
        // }

        if ($jobcategory) {
            if ($request->file('pictures')) {
                foreach ($request->file('pictures') as $photo) {
                    $jobcategory->addMedia($photo)->toMediaCollection('images', 'media');
                }
            }
        }

        // return to_route('myadmin.jobcategories.index');


        return to_route('myadmin.jobcategories.edit', ['jobcategory' => $jobcategory->slug]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(JobCategory $jobcategory)
    {
        // dd('delete');
        $jobcategory->delete();

        return to_route('myadmin.jobcategories.index');
    }
}
