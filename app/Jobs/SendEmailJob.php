<?php

namespace App\Jobs;

use App\Mail\Email;
use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class SendEmailJob implements ShouldQueue
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

        // $this->content = "<p>When designing a mailable's template, it is convenient to quickly preview the rendered mailable in your browser like a typical Blade template. For this reason, Laravel allows you to return any mailable directly from a route closure or controller. When a mailable is returned, it will be rendered and displayed in the browser, allowing you to quickly preview its design without needing to send it to an actual email address:
        // </p>";
        // $this->content .= "<a class='' href='https://google.com'>google</a>";
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
        //
        Mail::to($this->user['email'])->bcc(config('app.bcc_email'))->send(new Email($data));
    }
}
