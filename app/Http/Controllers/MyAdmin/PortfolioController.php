<?php

namespace App\Http\Controllers\MyAdmin;

use Inertia\Inertia;
use App\Models\Portfolio;
use App\Http\Controllers\Controller;
use App\Http\Requests\StorePortfolioRequest;
use App\Http\Requests\UpdatePortfolioRequest;
use App\Models\PortfolioCategory;

class PortfolioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $portfolios = Portfolio::with(['portfolio_category'])->orderBy('id', 'desc')->paginate(20);
        return Inertia::render('MyAdmin/Portfolio/Index')->with(['portfolios' => $portfolios]);
    }

    // public function indexPublic()
    // {
    //     $portfolios = Portfolio::with('portfolioCategory')->paginate(20);
    //     // dd($portfolios);
    //     return Inertia::render('Portfolio/Index')->with(['portfolios' => $portfolios]);
    // }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $portfoliocategories = PortfolioCategory::all();

        return Inertia::render('MyAdmin/Portfolio/Create')->with(['portfoliocategories' => $portfoliocategories]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePortfolioRequest $request)
    {
        $pictures = $request->file('pictures');

        // dd($request->all());
        $portfolio =  Portfolio::create([
            "title" => $request->input('title'),
            "portfolio_category_id" => $request->input('portfolio_category_id'),
            "small_description" => $request->input('small_description'),
            "description" => $request->input('description'),
            "enabled" => $request->input('enabled'),
        ]);


        if ($request->file('pictures')) {
            foreach ($request->file('pictures') as $photo) {
                $portfolio->addMedia($photo)->toMediaCollection('images');
            }
        }
        // if ($pictures) {
        //     $portfolio->addMultipleMediaFromRequest(['pictures'])->each(function ($file) {
        //         $file->toMediaCollection('images');
        //     });
        // }

        return to_route('myadmin.portfolio.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Portfolio $portfolio)
    {
        // return Inertia::render('Portfolio/Index')->with(['portfolio' => $portfolio]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Portfolio $portfolio)
    {
        $portfoliocategories = PortfolioCategory::all();

        // $portfolio = $portfolio->with('media')->first();
        $portfolio = Portfolio::with('media')->where('id', '=', $portfolio->id)->first();

        // dd($portfolio);

        return Inertia::render('MyAdmin/Portfolio/Edit')->with([
            'portfoliocategories' => $portfoliocategories,
            'portfolio' => $portfolio
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePortfolioRequest $request, Portfolio $portfolio)
    {
        $pictures = $request->file('pictures');

        $portfolio->update($request->all());
        // dd($request->all());
        // $portfolio->update([
        //     "title" => $request->input('title'),
        //     "portfolio_category_id" => $request->input('portfolio_category_id'),
        //     "small_description" => $request->input('small_description'),
        //     "description" => $request->input('description'),
        //     "enabled" => $request->input('enabled'),
        // ]);

        // if ($pictures) {

        //     $portfolio->addMultipleMediaFromRequest(['pictures'])->each(function ($file) {
        //         $file->toMediaCollection('images');
        //     });
        // }

        if ($request->file('pictures')) {
            foreach ($request->file('pictures') as $photo) {
                $portfolio->addMedia($photo)->toMediaCollection('images');
            }
        }
        return to_route('myadmin.portfolio.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Portfolio $portfolio)
    {
        $portfolio->delete();
        return to_route('myadmin.portfolio.index');
    }
}
