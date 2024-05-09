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
        Schema::create('message_boxes', function (Blueprint $table) {
            $table->id();
            $table->string('url');
            $table->string('message_type');
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->string('category_id');
            $table->string('category_name');
            $table->text('message')->nullable();
            $table->string('user_agent');
            $table->string('ip');
            $table->boolean('mark_as_read')->default(false);
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('message_boxes');
    }
};
