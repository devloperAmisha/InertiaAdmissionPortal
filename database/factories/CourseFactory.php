<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'description' => fake()->text(),
            'duration' => fake()->randomElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
            'eligibility' => fake()->text(),
            'fees' => fake()->randomFloat(2, 100, 1000),
        ];
    }
}
