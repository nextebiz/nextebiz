<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class JobPost extends Model implements HasMedia
{

    use HasFactory, Sluggable, InteractsWithMedia;

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public $table = 'jobposts';

    protected $fillable = ['applied', 'job_category_id', 'title', 'slug', 'featured', 'description', 'small_description', 'cities', 'job_type', 'working_hours', 'candidates_required'];
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
        return $this->belongsTo(JobCategory::class);
        // return $this->belongsTo(JobCategory::class, 'job_category_id');
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'jobpost_user', 'jobpost_id', 'user_id');
    }
    public function registerMediaConversions(Media|null $media = null): void
    {
        $this
            ->addMediaConversion('preview')
            ->fit(Fit::Contain, 300, 300)
            ->nonQueued();
    }
}
