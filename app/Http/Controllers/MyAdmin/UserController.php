<?php

namespace App\Http\Controllers\MyAdmin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::with(['media', 'roles'])->orderBy('id', 'desc')->paginate(20);
        $total_users = User::count();
        return Inertia::render('MyAdmin/Users/Index')->with(['users' => $users, 'total_users' => $total_users]);
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
    public function destroy(User $user)
    {
        // delete media

        // $media = $user->getMedia("*");
        // $media->delete();

        $user->delete();

        return to_route('myadmin.users.index');
    }
}
