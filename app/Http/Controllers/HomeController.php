<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\JobPost;
use App\Models\JobCategory;
use App\Models\JobpostUser;
use Illuminate\Http\Request;
use App\Jobs\SendWelcomeEmailJob;
use App\Models\MessageBox;
use App\Models\Portfolio;
use App\Models\PortfolioCategory;
use App\Rules\Recaptcha;
use Illuminate\Support\Facades\Auth;
use Illuminate\Contracts\Session\Session;
use finfo;

class HomeController extends Controller
{
    function index(Request $request)
    {
        $user_id = Auth::user()?->id;
        $jobpostuser = [];

        // $jobpostuser = JobpostUser::where([
        //     ['user_id', '=', $user_id],
        // ])->select(['jobpost_id'])->get();

        if ($user_id > 0) {
            $jobpostuser = JobpostUser::where([
                ['user_id', '=', $user_id],
            ])->select(['jobpost_id'])->pluck('jobpost_id')->toArray();
        }
        $categories = JobCategory::with(['jobPosts' => function ($query) {
            return $query->where('featured', true);
        }])->get();

        $jobcategories = JobCategory::with('media')->get();


        return Inertia::render('Home')->with([
            'categories' => $categories,
            'jobpostuser' => $jobpostuser,
            'jobcategories' => $jobcategories
        ]);
    }
    function expertise()
    {
        $jobcategories = JobCategory::with('media')->where('enabled', 1)->get();
        // dd($jobcategories->toArray());
        return Inertia::render("Expertise/Index")->with(['jobcategories' => $jobcategories]);
    }

    function expertise_details(JobCategory $jobcategory)
    {
        $jobcategories = JobCategory::with('media')->get();
        $user_id = Auth::user()?->id;
        $jobpostuser = [];


        if ($user_id > 0) {
            $jobpostuser = JobpostUser::where([
                ['user_id', '=', $user_id],
            ])->select(['jobpost_id'])->pluck('jobpost_id')->toArray();
        }

        $categories = JobCategory::with(['jobPosts' => function ($query) {
            return $query;
        }])->where([
            ['id', '=', $jobcategory->id],
            ['enabled', '=', 1]
        ])->get();


        $jobcategory = JobCategory::with('media')->where('id', '=', $jobcategory->id)->first();

        $count = $categories->count();


        if ($count > 0) {

            return Inertia::render("Expertise/Show")->with(['jobcategory' => $jobcategory, 'jobcategories' => $jobcategories, 'categories' => $categories, 'jobpostuser' => $jobpostuser]);
        }
        return abort(404);

        // return Inertia::render("Career/Index")->with(['categories' => $categories, 'jobpostuser' => $jobpostuser]);
    }

    function messagebox(Request $request)
    {

        // dd($request->all());

        $request->validate([
            'message_type' => ['required'],
            'name' => ['required'],
            'email' => ['required'],
            'phone' => ['required'],
            'category_id' => ['required'],
            'category_name' => ['required'],
            'message' => ['required'],
            'captcha_token'  => [new Recaptcha],
        ]);


        $url = request()->headers->get('referer');
        $message_type = $request->input('message_type');
        $name = $request->input('name');
        $email = $request->input('email');
        $phone = $request->input('phone');
        $category_id = $request->input('category_id');
        $category_name = $request->input('category_name');
        $message = $request->input('message');
        $user_agent = $request->header('User-Agent');
        $ip = $request->ip();


        MessageBox::create([
            'url' => $url,
            'message_type' => $message_type,
            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            'category_id' => $category_id,
            'category_name' => $category_name,
            'message' => $message,
            'user_agent' => $user_agent,
            'ip' => $ip,
        ]);


        $user = [
            'name' => 'admin',
            'email' => config('app.sales_email')
        ];
        $subject = "You have received a message from " . $name;

        $content = "<div>You have received the following info from client.</div>";
        $content .= "<div>message_type: " . $message_type . "</div>";
        $content .= "<div><strong>Name:</strong> " . $name . "</div>";
        $content .= "<div><strong>email:</strong>: " . $email . "</div>";
        $content .= "<div><strong>phone:</strong>: " . $phone . "</div>";
        $content .= "<div><strong>category_name:</strong>: " . $category_name . "</div>";
        $content .= "<div><strong>message:</strong>: " . $message . "</div>";
        $content .= "<div><strong>url:</strong>: " . $url . "</div>";
        $content .= "<div><strong>category_id:</strong>: " . $category_id . "</div>";
        $content .= "<div><strong>user_agent:</strong>: " . $user_agent . "</div>";
        $content .= "<div><strong>ip:</strong>: " . $ip . "</div>";

        dispatch(new SendWelcomeEmailJob($user, $subject, $content));

        return  redirect()->back();
    }

    public function contact()
    {

        $jobcategories = JobCategory::with('media')->get();
        return Inertia::render("Contact/Index")->with(['jobcategories' => $jobcategories]);
    }

    public function portfolios(Request $request)
    {
        // dd($request->all());

        $portfoliocategory_id = $request->input('portfoliocategory_id');

        $portfoliocategories = PortfolioCategory::select(['id', 'title', 'enabled'])->withCount('portfolios')->where('enabled', 1)->get();

        // dd($portfoliocategories->count_portfolio());
        $portfolios = Portfolio::with(['media', 'portfolio_category' => function ($q) {
            return $q->select('id', 'title', 'enabled');
        }])->orderBy('id', 'desc')->paginate(10);


        if ($portfoliocategory_id) {
            $portfolios = Portfolio::with(['media', 'portfolio_category' => function ($q) {
                return $q->select('id', 'title', 'enabled');
            }])->where('portfolio_category_id', '=', $portfoliocategory_id)->orderBy('id', 'desc')->paginate(10);
        }

        // dd($portfolios->toArray());

        $jobcategories = JobCategory::get();


        return Inertia::render('Portfolio/Index')->with([
            'jobcategories' => $jobcategories,
            'portfolios' => $portfolios,
            'portfoliocategories' => $portfoliocategories,
            'portfoliocategory_id' => $portfoliocategory_id
        ]);
    }
    public function portfolio_show(Portfolio $portfolio)
    {
        // $portfolio = $portfolio->with('portfolio_category')->first();
        // $media =  $portfolio->getMedia("images")->select('original_url');

        $p = Portfolio::with('portfolio_category')->where('id', '=', $portfolio->id)->first();


        $media =  $portfolio->getMedia("images")->pluck('original_url');

        // $p = Portfolio::with('media')->where('id', '=', $portfolio->id)->first();
        // $m = $p->getMedia('images');
        $jobcategories = JobCategory::with('media')->get();

        // dd($p);

        return Inertia::render('Portfolio/Show')->with([
            'portfolio' => $p,
            'media' => $media,
            'jobcategories' => $jobcategories
        ]);
    }
    function porfolio_media_delete(Portfolio $portfolio, Request $request)
    {
        // dd($portfolio);
        $media_id = $request->input('media_id');

        $media = $portfolio->getMedia("*");
        $find_media = $media->where('id', '=', $media_id)->first();

        if ($portfolio->default_media_id == $find_media->id) {
            $p = Portfolio::where('id', '=', $portfolio->id)->first();
            // dd('found green');
            $p->update([
                'default_media_id' => null
            ]);
        }

        if ($find_media) {
            $find_media->delete();
        }

        return back();
    }
    public function finfo()
    {
        $finfo = new finfo(FILEINFO_MIME_TYPE);
        // dd($finfo);
        return 'i am finfo';
    }
}
