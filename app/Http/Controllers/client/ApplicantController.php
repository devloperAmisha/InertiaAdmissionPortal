<?php

namespace App\Http\Controllers\client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Facades\Hash;

class ApplicantController extends Controller
{
    public function index(){
        return inertia('Client/Applicant/Index');
    }

       public function store(Request $request){
        $basicValidated = $request->validate([
            'first_name' => 'required|string|max:50',
            'middle_name' => 'nullable|string|max:50',
            'last_name' => 'required|string|max:50',
            'date_of_birth' => 'required|date|before:today',
            'gender' => 'required|in:Male,Female,Other',
            'city' => 'required|integer',
            'state' => 'required|integer',
            'country' => 'required|integer',
            'pincode' => 'required|string|min:6|max:6|regex:/^[0-9]{6}$/',
            'address' => 'required|string|max:500',
            // 'photo' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'phone' => 'required|string|min:10|max:15|regex:/^[0-9]{10,15}$/|unique:applicants,phone',
        ]);

        $accountValidated = $request->validate([
            'email' => 'required|email|max:100|unique:applicants,email',
            'password' => 'required|string|min:8|max:20|confirmed',
            'password_confirmation' => 'required|string|min:8|max:20'
        ]);
        try{
            $password_hash = Hash::make($validated['password']);
            $fullName = $validated['first_name'] . ' ' . $validated['middle_name'] . ' ' . $validated['last_name'];

            DB::transaction(function () use ($fullName, $password_hash, $basicValidated, $accountValidated) {
                $accountValidated['role_id'] = Role::where('name', '=', 'applicant')->first()->id;
                $user = User::create($accountValidated);

                $basicValidated['user_id'] = $user->id;
                $applicant = Applicant::create($basicValidated);
            });

            return redirect('/')->with('success', 'Your Account was created successfully.');
        }
        catch(\Exception $e){
            return redirect()->back()->with('error', 'Something went wrong! Please try again later.');
        }
    }
}
