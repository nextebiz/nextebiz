<?php

namespace Database\Seeders;

use App\Models\JobCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JobCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        JobCategory::create([
            'title' => 'UI/UX Frontend',
            'min' => 12,
            'max' => 35,
            'monthly' => 1200,
            'quarterly' => 1200,
            'enabled' => true
        ]);
        JobCategory::create([
            'title' => 'Graphic Designer',
            'min' => 12,
            'max' => 25,
            'monthly' => 1200,
            'quarterly' => 1200,
            'enabled' => true
        ]);
        JobCategory::create([
            'title' => 'Social Media',
            'min' => 17,
            'max' => 35,
            'monthly' => 1200,
            'quarterly' => 1200,
            'enabled' => true
        ]);
        JobCategory::create([
            'title' => 'Digital Marketing Expert',
            'min' => 15,
            'max' => 50,
            'monthly' => 1200,
            'quarterly' => 1200,
            'enabled' => true
        ]);
        JobCategory::create([
            'title' => 'Frontend Developer',
            'min' => 15,
            'max' => 35,
            'monthly' => 1200,
            'quarterly' => 1200,
            'enabled' => true
        ]);
        JobCategory::create([
            'title' => 'Backend Developer',
            'min' => 25,
            'max' => 75,
            'monthly' => 1200,
            'quarterly' => 1200,
            'enabled' => true
        ]);
        JobCategory::create([
            'title' => 'Business Development Executive',
            'min' => 35,
            'max' => 75,
            'monthly' => 1200,
            'quarterly' => 1200,
            'enabled' => true
        ]);
        JobCategory::create([
            'title' => 'SQA Analyst',
            'min' => 20,
            'max' => 45,
            'monthly' => 1200,
            'quarterly' => 1200,
            'enabled' => true
        ]);
        JobCategory::create([
            'title' => 'Customer Service Representative',
            'min' => 12,
            'max' => 25,
            'monthly' => 1200,
            'quarterly' => 1200,
            'enabled' => true
        ]);
        JobCategory::create([
            'title' => 'Wordpress Developer',
            'min' => 20,
            'max' => 45,
            'monthly' => 1200,
            'quarterly' => 1200,
            'enabled' => true
        ]);
        JobCategory::create([
            'title' => 'Fullstack Developer',
            'min' => 35,
            'max' => 120,
            'monthly' => 1200,
            'quarterly' => 1200,
            'enabled' => true
        ]);
        JobCategory::create([
            'title' => 'Trainee Software Developer',
            'min' => 0,
            'max' => 0,
            'monthly' => 1200,
            'quarterly' => 1200,
            'enabled' => true
        ]);
    }
}
