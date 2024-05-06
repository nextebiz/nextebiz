<?php

namespace App\Http\Controllers\Candidate;

use App\Models\User;
use Inertia\Inertia;
use App\Models\JobpostUser;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Jobs\SendEmailJob;
use App\Models\JobPost;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;

class CandidateController extends Controller
{
    public function index(Request $request)
    {
        $jobpostusers = JobpostUser::with(['jobpost' => function ($query) {
            return $query;
        }])->where('user_id', '=', Auth::user()->id)->get();

        return Inertia::render('Candidate/Dashboard')->with([
            'jobpostusers' => $jobpostusers
        ]);
    }

    public function withdraw(Request $request)
    {
        $user_id_loggedin = Auth::user()->id;
        $user_id = $request->input('user_id');
        $jobpost_id = $request->input('jobpost_id');

        if ($user_id === $user_id_loggedin) {

            $jobpostuser = JobpostUser::where([['user_id', '=',  $user_id], ['jobpost_id', '=', $jobpost_id]]);
            $jobpostuser->delete();


            $user = User::where('id', '=', Auth::user()->id)->first();
            $jobpost = JobPost::where('id', '=', $jobpost_id)->first();

            $subject = "Your application is removed from " . $jobpost->title;

            $content = "<p>Your application is successfully removed from " . config('app.company') . "</p>";
            $content .= "View job: <a href='" . config('app.url') . "/jobs/" . $jobpost->slug . "'>" . $jobpost->title . "</a>";
            dispatch(new SendEmailJob($user, $subject, $content));

            // return back();
        }
    }

    public function profile(Request $request)
    {
        $user = User::where('id',  Auth::user()->id)->first();

        $uploaded_file_name = $user->getFirstMedia('docs')?->file_name;

        $uploaded_file = $user->getFirstMediaUrl('docs');


        return Inertia::render('Candidate/Profile/Index')->with([
            'uploaded_file' => $uploaded_file,
            'uploaded_file_name' => $uploaded_file_name
        ]);
    }

    // public function download(String $filename, $id)
    // {
    //     dd($filename);

    //     $file_path = storage_path('/storage/media/' . $filename);
    //     if (File::exists($file_path)) {
    //         return response()->download($file_path);
    //     } else {
    //         return abort(404);
    //     }
    // }
}
