<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class JobPost extends Model
{

    use HasFactory, Sluggable;

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public $table = 'jobposts';

    protected $fillable = ['job_category_id', 'title', 'slug', 'featured', 'description', 'cities', 'job_type', 'working_hours', 'candidates_required'];
    protected $casts = [
        'cities' => 'array'
    ];

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title',
                'onUpdate' => true,
            ]
        ];
    }

    public function jobCategory(): BelongsTo
    {
        return $this->belongsTo(JobCategory::class, 'job_category_id');
    }

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }
}
