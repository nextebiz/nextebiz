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
            'title' => 'Fullstack Development',
            'min' => 35,
            'max' => 120,
            'monthly' => 1200,
            'quarterly' => 1200,
            'enabled' => true
        ]);

        JobCategory::create([
            'title' => 'Wordpress Development',
            'min' => 20,
            'max' => 45,
            'monthly' => 1200,
            'quarterly' => 1200,
            'enabled' => true
        ]);

        JobCategory::create([
            'title' => 'Mobile App Development',
            'min' => 20,
            'max' => 45,
            'monthly' => 1200,
            'quarterly' => 1200,
            'enabled' => true
        ]);

        JobCategory::create([
            'title' => 'E-commerce Services',
            'min' => 20,
            'max' => 45,
            'monthly' => 1200,
            'quarterly' => 1200,
            'enabled' => true
        ]);

        JobCategory::create([
            'title' => 'Virtual Assistant Ebay/Amazon/Walmart',
            'min' => 20,
            'max' => 45,
            'monthly' => 1200,
            'quarterly' => 1200,
            'enabled' => true
        ]);

        JobCategory::create([
            'title' => 'UI/UX Frontend',
            'min' => 12,
            'max' => 35,
            'monthly' => 1200,
            'quarterly' => 1200,
            'enabled' => true
        ]);
        JobCategory::create([
            'title' => 'Graphic Designing',
            'min' => 12,
            'max' => 25,
            'monthly' => 1200,
            'quarterly' => 1200,
            'enabled' => true
        ]);

        JobCategory::create([
            'title' => 'Social Media Marketing',
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
            'title' => 'Frontend Development',
            'min' => 15,
            'max' => 35,
            'monthly' => 1200,
            'quarterly' => 1200,
            'enabled' => true
        ]);
        JobCategory::create([
            'title' => 'Backend Development',
            'min' => 25,
            'max' => 75,
            'monthly' => 1200,
            'quarterly' => 1200,
            'enabled' => true
        ]);

        JobCategory::create([
            'title' => 'Business Development',
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
    }
}
