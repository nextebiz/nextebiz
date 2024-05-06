<?php

namespace Database\Seeders;

use App\Models\JobPost;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JobPostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        JobPost::create([
            'job_category_id' => 1,
            'title' => 'first job title',
            'featured' => true,
            'small_description'=> 'Small Description',
            'description' => 'hello',
            'cities' => ['islamabad', 'lahore'],
            'job_type' => 'custom',
            'working_hours' => 'working hours',
            'candidates_required' => 2
        ]);
        JobPost::create([
            'job_category_id' => 1,
            'title' => 'first job title 2',
            'featured' => true,
            'small_description'=> 'Small Description 2',
            'description' => 'hello 2',
            'cities' => ['islamabad', 'karachi'],
            'job_type' => 'custom',
            'working_hours' => 'working hours',
            'candidates_required' => 2
        ]);
        JobPost::create([
            'job_category_id' => 2,
            'title' => 'second job title',
            'featured' => true,
            'small_description'=> 'Small Description',
            'description' => 'hello',
            'cities' => ['islamabad', 'karachi', 'dubai'],
            'job_type' => 'custom',
            'working_hours' => '9to5',
            'candidates_required' => 2
        ]);
    }
}
// 'job_category_id','title','slug','featured','description','cities','job_type','working_hours','candidates_required';
