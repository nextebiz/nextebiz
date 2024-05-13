<?php

namespace App\Http\Controllers\MyAdmin;

use App\Http\Controllers\Controller;
use App\Models\MessageBox;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $total_messages = MessageBox::where('mark_as_read', '=', 0)->count();
        $total_users = User::count();
        return Inertia::render('MyAdmin/Dashboard')->with(['total_messages' => $total_messages, 'total_users' => $total_users]);
    }
    public function profile()
    {
        return Inertia::render('MyAdmin/Profile/Index');
    }
}
