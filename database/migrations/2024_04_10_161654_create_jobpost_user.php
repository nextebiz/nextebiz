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
        Schema::create('jobpost_user', function (Blueprint $table) {
            $table->unsignedBigInteger('jobpost_id');
            $table->unsignedBigInteger('user_id');

            $table->foreign('jobpost_id')->references('id')->on('jobposts')->cascadeOnDelete();
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('jobpost_user', function (Blueprint $table) {
            //
        });
    }
};
