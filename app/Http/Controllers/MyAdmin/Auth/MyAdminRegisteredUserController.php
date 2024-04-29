<?php

namespace App\Http\Controllers\MyAdmin\Auth;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Country;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;

class MyAdminRegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        $countries = Country::all();
        return Inertia::render('MyAdmin/Auth/Register')->with(['countries' => $countries]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'phone' => ['required', 'min:5'],
            'country' => ['required'],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
            'country' => $request->country,
            // 'enabled' => 0
        ]);

        $role = $user->assignRole('admin');

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('myadmin.index', absolute: false));
    }
}
