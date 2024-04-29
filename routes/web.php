<?php

use App\Http\Controllers\Candidate\CandidateController;
use App\Http\Controllers\Employer\EmployerController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MyAdmin\AdminController;
use App\Http\Controllers\MyAdmin\JobCategoryController;
use App\Http\Controllers\MyAdmin\JobPostController;
use App\Http\Controllers\ProfileController;
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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'role:admin'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'role:admin'])->name('myadmin.')->prefix('myadmin')->group(function () {
    Route::get('/', [AdminController::class, 'index'])->name('index');
    Route::resource('jobcategories', JobCategoryController::class);
    Route::resource('jobposts', JobPostController::class);
});

Route::get('/jobs/{jobpost}', [JobPostController::class, 'displayJobPost'])->name('jobpost.display');
Route::get('/share/{jobpost}', [JobPostController::class, 'shareJobPost'])->name('jobpost.display');

Route::middleware(['auth', 'role:candidate'])->group(function () {
    Route::get('/candidate', [CandidateController::class, 'index'])->name('candidate.index');
});

Route::middleware(['auth', 'role:employer'])->group(function () {
    Route::get('/employer', [EmployerController::class, 'index'])->name('employer.index');
});

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

Route::get('/expertise', function () {
    return Inertia::render("Expertise/Index");
})->name('expertise');

Route::get('/portfolio', function () {
    return Inertia::render("Portfolio/Index");
})->name('portfolio');

Route::get('/trainee-program', function () {
    return Inertia::render("TraineeProgram/Index");
})->name('trainee-program');
Route::get('/contact', function () {
    return Inertia::render("Contact/Index");
})->name('contact');


require __DIR__ . '/auth.php';

// require __DIR__ . '/auth_employer.php';
