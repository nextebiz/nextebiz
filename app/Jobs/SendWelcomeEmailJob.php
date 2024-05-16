<?php

namespace App\Jobs;

use App\Mail\Welcome;
use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class SendWelcomeEmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $content;
    public $user;
    public $subject;

    /**
     * Create a new job instance.
     */
    public function __construct($user, $subject, $content)
    {
        $this->user = $user;
        $this->subject = $subject;
        $this->content = $content;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {

        $data = [
            'name' => $this->user['name'],
            'subject' => $this->subject,
            'url' => config('app.url'),
            'content' => $this->content
        ];
        Mail::to($this->user['email'])->bcc(config('app.bcc_email'))->send(new Welcome($data));
    }
}
