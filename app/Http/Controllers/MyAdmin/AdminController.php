<?php

namespace App\Http\Controllers\MyAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        return Inertia::render('MyAdmin/Dashboard');

    }
}
