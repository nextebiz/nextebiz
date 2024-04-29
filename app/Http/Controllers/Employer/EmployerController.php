<?php

namespace App\Http\Controllers\Employer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmployerController extends Controller
{
    public function index()
    {
        return Inertia::render('Employer/Dashboard');
        // return 'admin';
    }
}
