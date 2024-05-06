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
        Schema::create('portfolios', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->unsignedBigInteger('portfolio_category_id');
            $table->string('slug');
            $table->integer('default_media_id')->nullable();
            $table->longText('small_description')->nullable();
            $table->longText('description')->nullable();
            $table->boolean('enabled')->default(1);
            $table->timestamps();

            $table->foreign('portfolio_category_id')->references('id')->on('portfolio_categories')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('portfolios');
    }
};
