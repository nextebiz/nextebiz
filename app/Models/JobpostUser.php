<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobpostUser extends Model
{
    use HasFactory;

    protected $table = 'jobpost_user';

    protected $fillable = ['jobpost_id', 'user_id'];
    public $timestamps = false;
}
