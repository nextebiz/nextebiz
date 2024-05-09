<?php

namespace App\Http\Controllers\MyAdmin;

use App\Http\Controllers\Controller;
use App\Models\MessageBox;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MessageBoxController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $messages = MessageBox::orderBy('id', 'desc')->paginate(20);
        return Inertia::render('MyAdmin/Messages/Index')->with(['messages' => $messages]);
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MessageBox $message)
    {
        $message->delete();
        return to_route('myadmin.messages.index');
    }
}
