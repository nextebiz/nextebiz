<?php

use App\Http\Controllers\Candidate\CandidateController;
// use App\Http\Controllers\Employer\EmployerController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MyAdmin\AdminController;
use App\Http\Controllers\MyAdmin\JobCategoryController;
use App\Http\Controllers\MyAdmin\JobPostController;
use App\Http\Controllers\MyAdmin\PortfolioCategoryController;
use App\Http\Controllers\MyAdmin\PortfolioController;
use App\Http\Controllers\ProfileController;
use App\Mail\Email;
use App\Mail\Welcome;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [HomeController::class, 'index'])->name('home');
// Route::get('/', function () {
//     return Inertia::render('Home');
// })->name('home');

// Route::get('/', function () {
//     return View('welcome');
// })->name('home');
Route::get('/swiper', function () {
    return Inertia::render('Swiper/Index');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'role:admin'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/password', [ProfileController::class, 'password'])->name('profile.password');
    Route::get('/delete_account', [ProfileController::class, 'deleteaccount'])->name('profile.deleteaccount');
    Route::post('/applyjob', [JobPostController::class, 'applyjob'])->name('jobpost.applyjob');
});

// Route::get('/download/resume/{id}/{filename}', [CandidateController::class, 'download'])->name('download.resume');

Route::middleware(['auth', 'role:admin'])->name('myadmin.')->prefix('myadmin')->group(function () {
    Route::get('/', [AdminController::class, 'index'])->name('index');
    Route::resource('jobcategories', JobCategoryController::class);
    Route::post('jobcategories/{jobcategory}', [JobCategoryController::class, 'update']);
    Route::resource('jobposts', JobPostController::class);
    Route::resource('portfolio', PortfolioController::class);
    Route::post('portfolio/{portfolio}', [PortfolioController::class, 'update']);

    Route::resource('portfoliocategories', PortfolioCategoryController::class);

    Route::get('/{jobpost}/applicants', [JobPostController::class, 'applicants'])->name('applicants');
});

Route::get('/mail', function () {
    return (new Email([
        'subject' => "hello subject",
        'content' => 'i am content',
        'name' => 'imranx',
        'url' => 'https://geo.tv',
        'email' => env('FROM_EMAIL', 'info@nextebiz.com'),
    ]))->render();


    // return view('mail.signup')->with(['name' => 'imran', 'email' => 'imran@malik.com', 'url' => 'https://geo.tv']);
});

Route::get('/jobs/{jobpost}', [JobPostController::class, 'displayJobPost'])->name('jobpost.display');
Route::get('/share/{jobpost}', [JobPostController::class, 'shareJobPost'])->name('jobpost.display');
Route::post('/messagebox', [HomeController::class, 'messagebox'])->name('messagebox.send');

Route::middleware(['auth', 'role:candidate'])->group(function () {
    Route::get('/candidate', [CandidateController::class, 'index'])->name('candidate.index');
    Route::get('/candidate/profile', [CandidateController::class, 'profile'])->name('candidate.profile');
    Route::post('/candidate/withdraw', [CandidateController::class, 'withdraw'])->name('candidate.withdraw');
});

// Route::middleware(['auth', 'role:employer'])->group(function () {
//     Route::get('/employer', [EmployerController::class, 'index'])->name('employer.index');
// });

Route::get('/about', function () {
    return Inertia::render("About/Index");
})->name('about');

// Route::get('/open-positions', function () {
//     return Inertia::render("Career/Index");
// })->name('open-positions');

Route::get('/open-positions', [JobPostController::class, 'openPositions'])->name('open-positions');

Route::get('/engage-team', function () {
    return Inertia::render("Engage/Index");
})->name('engage-team');

Route::get('/expertise', [HomeController::class, 'expertise'])->name('expertise');
Route::get('/expertise/{jobcategory}', [HomeController::class, 'expertise_details'])->name('expertise');

Route::get('/portfolio', [HomeController::class, 'portfolios'])->name('portfolio.index');
Route::get('/portfolio/{portfolio}', [HomeController::class, 'portfolio_show'])->name('portfolio.show');
Route::post('/portfolio/{portfolio}/media/delete', [HomeController::class, 'porfolio_media_delete'])->name('portfolio.media.delete');

Route::get('/trainee-program', function () {
    return Inertia::render("TraineeProgram/Index");
})->name('trainee-program');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');


require __DIR__ . '/auth.php';
