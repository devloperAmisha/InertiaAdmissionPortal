<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;


use App\Models\User;
use App\Models\Role;


class RegisterController extends Controller
{
    public function index(){
        return inertia('Auth/Register');
    }
    public function registers(Request $request){
       $validated = $request->validate([
            'name' =>'required|string|max:100',
            'email' =>'required|string|max:255|unique:users',
            'password' =>'required|string|min:8|max:20|confirmed',
        ]);
      $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' =>Hash::make($validated['password']),
            'role_id' => Role::where('name' ,'=', 'user')->first()->id,

        ]);
        Auth::login($user);

        return redirect('/');
    }
}
