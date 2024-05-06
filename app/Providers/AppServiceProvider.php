<?php

namespace App\Providers;

use Illuminate\Auth\Middleware\RedirectIfAuthenticated;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        RedirectIfAuthenticated::redirectUsing(function ($request) {

            if ($request->user()) {
                $role = $request->user()->getRoleNames()[0];

                if ($role === 'admin') {
                    return route('myadmin.index');
                }
                if ($role === 'candidate') {
                    return route('candidate.index');
                }
                if ($role === 'employer') {
                    return route('employer.index');
                }

                return abort(404);
            }
        });
    }
}
