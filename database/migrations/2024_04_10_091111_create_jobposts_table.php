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
        Schema::create('jobposts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('job_category_id');
            $table->string('title');
            $table->string('slug')->unique();
            $table->boolean('featured')->default(0);
            $table->boolean('enabled')->default(1);
            $table->text('small_description')->default('');
            $table->longText('description');
            $table->json('cities');
            $table->string('job_type')->default('Full-time'); // 'Part-time', 'Contract'
            $table->string('working_hours')->default('9:00 a.m. - 5:00 p.m.'); // '2:00 p.m. - 10:00 p.m.', 'Flexible'
            $table->integer('candidates_required')->default(1);
            $table->foreign('job_category_id')->references('id')->on('job_categories')->cascadeOnDelete();
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_posts');
    }
};
