<?php

namespace App\Http\Controllers\MyAdmin;

use Inertia\Inertia;
use App\Models\PortfolioCategory;
use App\Http\Controllers\Controller;
use App\Http\Requests\StorePortfolioCategoryRequest;
use App\Http\Requests\UpdatePortfolioCategoryRequest;

class PortfolioCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $portfoliocategories = PortfolioCategory::get();
        return Inertia::render('MyAdmin/PortfolioCategories/Index')->with(['portfoliocategories' => $portfoliocategories]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('MyAdmin/PortfolioCategories/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePortfolioCategoryRequest $request)
    {
        // dd($request->all());

        PortfolioCategory::create($request->all());

        return to_route('myadmin.portfoliocategories.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(PortfolioCategory $portfoliocategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PortfolioCategory $portfoliocategory)
    {
        return Inertia::render('MyAdmin/PortfolioCategories/Edit')->with(['portfoliocategory' => $portfoliocategory]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePortfolioCategoryRequest $request, PortfolioCategory $portfoliocategory)
    {
        $portfoliocategory->update($request->all());

        return to_route('myadmin.portfoliocategories.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PortfolioCategory $portfoliocategory)
    {
        $portfoliocategory->delete();
        return to_route('myadmin.portfoliocategories.index');

    }
}
