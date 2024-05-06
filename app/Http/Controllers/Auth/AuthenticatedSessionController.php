<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\JobCategory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Route;
use App\Http\Requests\Auth\LoginRequest;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        $jobcategories = JobCategory::with('media')->get();
        // dd($jobcategories->toArray());
        // return Inertia::render("Expertise/Index")->with(['jobcategories' => $jobcategories]);

        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
            'jobcategories' => $jobcategories
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();
        $request->session()->regenerate();
        $role = 'candidate';
        if ($request->user()->getRoleNames()->count() > 0) {
            $role = $request->user()->getRoleNames()[0];
        } else {
            $request->user()->assignRole('candidate');
        }
        if ($role === 'admin') {
            return redirect()->intended(route('myadmin.index', absolute: false));
        }
        if ($role === 'candidate') {
            return redirect()->intended(route('candidate.index', absolute: false));
        }
        if ($role === 'employer') {
            return redirect()->intended(route('employer.index', absolute: false));
        }

        return abort(404);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
