<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;


use App\Models\User;
use App\Models\Role;

class LoginController extends Controller
{
    public function index(){
        return inertia('Auth/Login');
    }
     public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

       if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            if(Auth::user()->role->name == 'admin'){
                return redirect()->intended('/admin/dashboard');
            }
            if(Auth::user()->role->name == 'user'){
                return redirect()->intended('/user/dashboard');
            }
            return redirect()->intended('/applicant/dashboard');
        }
        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }
}
