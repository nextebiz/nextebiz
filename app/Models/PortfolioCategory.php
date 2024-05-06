<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PortfolioCategory extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'enabled'];

    public function portfolios(): HasMany
    {
        return $this->hasMany(Portfolio::class);
    }
}
