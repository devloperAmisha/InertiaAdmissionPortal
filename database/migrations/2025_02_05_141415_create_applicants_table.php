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
        Schema::create('applicants', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name');
            $table->string('email');
            $table->string('phone');
            $table->date('date_of_birth');
            $table->string('gender');
            $table->string('address');
            $table->string('state');
            $table->string('city');
            $table->string('pincode');
            $table->string('country');
            $table->string('photo')->nullable();
            $table->string('institute_10th')->nullable();
            $table->string('percentage_10th')->nullable();
            $table->string('year_of_passing_10th')->nullable();
            $table->string('board_10th')->nullable();
            $table->string('institute_12th')->nullable();
            $table->string('percentage_12th')->nullable();
            $table->string('year_of_passing_12th')->nullable();
            $table->string('board_12th')->nullable();
            $table->string('institute_graduation')->nullable();
            $table->string('percentage_graduation')->nullable();
            $table->string('year_of_passing_graduation')->nullable();
            $table->string('board_graduation') ->nullable();
            $table->string('institute_post_graduation')->nullable();
            $table->string('percentage_post_graduation')->nullable();
            $table->string('year_of_passing_post_graduation')->nullable();
            $table->string('board_post_graduation')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('applicants');
    }
};
