<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user1 = User::create([
            'name' => 'admin',
            'email' => 'admin@nextebiz.com',
            'password' => 'Imranmalik123#'
        ]);

        $user1->assignRole('admin');

        $user2 = User::create([
            'name' => 'employer',
            'email' => 'employer@nextebiz.com',
            'password' => 'Imranmalik123#'
        ]);

        $user2->assignRole('employer');

        $user3 = User::create([
            'name' => 'candidate',
            'email' => 'candidate@nextebiz.com',
            'password' => 'Imranmalik123#'
        ]);

        $user3->assignRole('candidate');
    }
}
