<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTestDBRequest;
use App\Http\Requests\UpdateTestDBRequest;
use App\Models\TestDB;
use Inertia\Inertia;

class TestDBController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tests = TestDB::orderBy('id', 'desc')->paginate(20);
        return Inertia::render('TestDB/Index')->with(['tests' => $tests]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTestDBRequest $request)
    {
        // dd($request->all());

        TestDB::create($request->all());

        return back()->with(['msg' => 'Data Inserted']);
    }

    /**
     * Display the specified resource.
     */
    public function show(TestDB $testDB)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TestDB $testDB)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTestDBRequest $request, TestDB $testDB)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TestDB $testDB)
    {
        //
    }
}
