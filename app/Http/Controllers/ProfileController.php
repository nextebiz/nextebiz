<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\JobpostUser;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    public function password(Request $request): Response
    {
        return Inertia::render('Password/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    public function deleteaccount(Request $request): Response
    {
        return Inertia::render('DeleteAccount/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }



    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $user = User::where('id', $request->user()->id)->first();

        $posted_name = $request->input('name');
        $posted_email = $request->input('email');
        $posted_resume_file = $request->file('resume_file');

        $filename = '-';
        $datetime = new \DateTime('now');
        $date =  Carbon::parse($datetime)->format('d-m-y-H-i-s');

        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        if ($posted_resume_file != null) {

            $media = $user->getFirstMedia('docs');
            if ($media) {
                $user->deleteMedia($media);
            }

            $user->addMediaFromRequest("resume_file")->toMediaCollection('docs', 'media');


            //     $myfile = public_path('storage/resume/' . $user->resume_file);
            //     if (File::exists($myfile)) {
            //         File::delete($myfile);
            //     }

            //     $name_underscores =  preg_replace('/[^a-zA-Z]/', '_',  $user->name);
            //     $filename = $name_underscores . '_' . $user->id . '_' . $date . '.' .   $posted_resume_file->getClientOriginalExtension();

            //     $path = $posted_resume_file->storeAs('public/resume', $filename);
        }
        // $request->user()->save();

        $user->update([
            'name' => $posted_name,
            'email' => $posted_email,
        ]);

        // if ($request->file('resume_file') != null) {
        //     $user->update([
        //         'resume_file' => $filename
        //     ]);
        // }

        $role = Auth::user()->roles[0]->name;
        if ($role == 'candidate') {
            return Redirect::route('candidate.profile');
        }
        if ($role == 'employer') {
            return Redirect::route('candidate.profile');
        }
        if ($role == 'admin') {
            return Redirect::route('myadmin.profile');
        }
        // return Redirect::route('candidate.profile');
        return redirect()->to(route(('candidate.profile')));
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        JobpostUser::where('user_id', '=', $user->id)->delete();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
