<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {

            $table->string('user_type')->default(''); //admin, candidate, employer
            $table->string('picture')->default('');
            $table->string('phone')->default('');
            $table->string('city')->default('');
            $table->string('country')->default('');
            $table->longText('profile')->nullable();
            $table->string('resume_file')->default('');
            $table->boolean('enabled')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('user_type');
            $table->dropColumn('picture');
            $table->dropColumn('phone');
            $table->dropColumn('city');
            $table->dropColumn('country');
            $table->dropColumn('profile');
            $table->dropColumn('resume_file');
            $table->dropColumn('enabled');
        });
    }
};
