<?php

namespace App\Http\Controllers;

use App\Models\JobCategory;
use App\Models\JobPost;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    function index(Request $request)
    {
        // $jobposts = JobPost::where('featured', 1)->get();
        $categories = JobCategory::with(['jobPosts' => function ($query) {
            return $query->where('featured', true);
        }])->get();
        return Inertia::render('Home')->with(['categories' => $categories]);
    }
}
