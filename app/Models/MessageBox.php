<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MessageBox extends Model
{
    use HasFactory;

    protected $fillable = ['url', 'message_type', 'mark_as_read', 'name', 'email', 'phone', 'category_id', 'category_name', 'message', 'user_agent', 'ip'];
}
