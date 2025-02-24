<?php

namespace App\Http\Controllers\client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Role;
use App\Models\Applicant;


class ApplicantController extends Controller
{
    public function Dashboard(){
        $applicant=Applicant::where('user_id' , auth()->user()->id)->first();
        return inertia('Client/Applicant/Dashboard', ['applicant' => $applicant]);
    }
    public function index(){
        return inertia('Client/Applicant/Apply');
    }
        public function store(Request $request)
    {
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
        try {
            $password_hash = Hash::make($accountValidated['password']);
            $fullName = $basicValidated['first_name'] . ' ' . $basicValidated['middle_name'] . ' ' . $basicValidated['last_name'];

            DB::transaction(function () use ($fullName, $password_hash, $basicValidated, $accountValidated) {
                $accountValidated['role_id'] = Role::where('name', '=', 'applicant')->first()->id;
                $accountValidated['name'] = $fullName;
                $accountValidated['phone'] = $basicValidated['phone'];
                $user = User::create($accountValidated);

                 //dd($user);

                $basicValidated['user_id'] = $user->id;
                $basicValidated['email'] = $user->email;
                $applicant = Applicant::create($basicValidated);
            });

            return redirect('/')->with('success', 'Account created successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong! Please try again later.' . $e->getMessage());
        }
    }

     public function edit(Applicant $applicant){
        return inertia('Client/Applicant/Edit', ['applicant' => $applicant]);
    }
    public function update(Request $request , Applicant $applicant){
        try{
             $validate=$request ->validate([
                'institute_10th' => 'required|string|max:255',
                'percentage_10th' => 'required|numeric|between:0,100',
                'year_of_passing_10th' => 'required|integer|digits:4|min:2000|max:' . date('Y'),
                'board_10th' => 'required|string|max:255',

                'institute_12th' => 'required|string|max:255',
                'percentage_12th' => 'required|numeric|between:0,100',
                'year_of_passing_12th' => 'required|integer|digits:4|min:2000|max:' . date('Y'),
                'board_12th' => 'required|string|max:255',

                'institute_graduation' => 'nullable|string|max:255',
                'percentage_graduation' => 'nullable|numeric|between:0,100',
                'year_of_passing_graduation' => 'nullable|integer|digits:4|min:2000|max:' . date('Y'),
                'board_graduation' => 'nullable|string|max:255',

                'institute_post_graduation' => 'nullable|string|max:255',
                'percentage_post_graduation' => 'nullable|numeric|between:0,100',
                'year_of_passing_post_graduation' => 'nullable|integer|digits:4|min:2000|max:' . date('Y'),
                'board_post_graduation' => 'nullable|string|max:255',
        ]);
         $applicant->update($validate);
          return redirect('/applicant/profile/edit/'.$applicant->id)->with('success', 'Applicant updated successfully.');
     }
     catch(\Exception $e){
            //  dd($e);
            return redirect('/applicant/profile/edit/'.$applicant->id)->with('error', 'Applicant cannot be updated. Please try again.');
         }

      }
    }
