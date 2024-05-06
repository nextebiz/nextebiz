<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class JobpostUser extends Model
{
    use HasFactory;

    protected $table = 'jobpost_user';

    protected $fillable = ['jobpost_id', 'user_id'];
    public $timestamps = true;

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function jobpost(): BelongsTo
    {
        return $this->belongsTo(JobPost::class, 'jobpost_id');
    }

    public function countUsers(){
        return $this->user()->count();
    }
}
