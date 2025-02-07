<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Role;
use  Illuminate\Support\Facades\Hash;



class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Akansha Singh',
            'email' => 'akansha@gmail.com',
            'password' =>Hash::make('admin@123'),
            'role_id' => Role::where('name' ,'=', 'user')->first()->id,

        ]);
    }
}
