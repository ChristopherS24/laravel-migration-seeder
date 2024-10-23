<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Train;

class TrainSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Train::truncate();

        for ($i =0; $i < 15; $i++) {
            $train = new Train();
            $train->company = fake()->company();
            $train->departure_station = fake()->city();
            $train->arrive_station = fake()->city();
            $train->departure_time = fake()->time();
            $train->arrive_time = fake()->time();
            $train->carriages_number = rand(1, 10);
            $train->on_time = fake()->boolean(65);
            $train->canceled = fake()->boolean(25);
            $train->code = strtoupper(fake()->shuffle(fake()->unique()->bothify('???###')));
            $train->save();

        }
    }
}
