<?php

namespace App\Http\Controllers\Candidate;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class CandidateController extends Controller
{
    public function index(Request $request)
    {
        // $role = $request->user()->getRoleNames();

        return Inertia::render('Candidate/Dashboard'); //->with(['role' => $role]);
    }
}
