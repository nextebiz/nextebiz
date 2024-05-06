<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PortfolioCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PortfolioCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PortfolioCategory::create([
            'title' => 'Website Development'
        ]);
        PortfolioCategory::create([
            'title' => 'Wordpress Development'
        ]);
        PortfolioCategory::create([
            'title' => 'Mobile App Development'
        ]);
        PortfolioCategory::create([
            'title' => 'Graphic Designing'
        ]);
        PortfolioCategory::create([
            'title' => 'Social Media'
        ]);
        PortfolioCategory::create([
            'title' => 'SEO & Digital Marketing'
        ]);
        PortfolioCategory::create([
            'title' => 'Ecommerce Development'
        ]);
    }
}
