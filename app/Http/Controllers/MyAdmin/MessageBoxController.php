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
    public function index(Request $request)
    {
        $mark_as_read = $request->input('mark_as_read');

        $control = "=";

        if ($mark_as_read == null || $mark_as_read == -1) {
            $mark_as_read = -1;
            $control = ">";
        }
        $messages = MessageBox::orderBy('id', 'desc')->where('mark_as_read', $control, $mark_as_read)->paginate(20);

        if ($mark_as_read == 2) {
        } else {
        }
        $total_messages = MessageBox::where('mark_as_read', '=', 0)->count();

        return Inertia::render('MyAdmin/Messages/Index')->with(['messages' => $messages, 'mark_as_read' => $mark_as_read, 'total_messages' => $total_messages]);
    }


    // public function filter(Request $request)
    // {
    //     $mark_as_read = $request->input('mark_as_read');

    //     if ($mark_as_read == 0 || $mark_as_read == 1) {
    //         // dd('hi', $mark_as_read);
    //         $messages = MessageBox::orderBy('id', 'desc')->where('mark_as_read', '=', $mark_as_read)->paginate(2);
    //         // return Inertia::render('MyAdmin/Messages/Index')->with(['messages' => $messages]);
    //         return back()->with(['messages' => $messages]);
    //     } else {
    //         $messages = MessageBox::orderBy('id', 'desc')->paginate(2);
    //         // return Inertia::render('MyAdmin/Messages/Index')->with(['messages' => $messages]);
    //         return back()->with(['messages' => $messages]);
    //     }
    // }
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
    public function update(Request $request, MessageBox $message)
    {
        $referer = request()->headers->get('referer');

        // dd($referer);
        $mark_as_read = $message->mark_as_read;

        if ($mark_as_read == 1) {
            $message->update([
                'mark_as_read' => false
            ]);
        } else {
            $message->update([
                'mark_as_read' => true
            ]);
        }

        return back();
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
