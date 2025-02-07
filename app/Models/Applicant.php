<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Applicant extends Model
{
    protected $table = 'Applicant';
    protected $fiilable =[
        'first_name',
        'middle_name',
        'last_name',
        'email',
        'phone',
        'date_of_birth',
        'gender',
        'address',
        'state',
        'city',
        'pincode',
        'country',
        'photo',
        'institute_10th',
        'percentage_10th',
        'year_of_passing_10th',
        'board_10th',
        'institute_12th',
        'percentage_12th',
        'year_of_passing_12th',
        'board_12th',
        'institute_graduation',
        'percentage_graduation',
        'year_of_passing_graduation',
        'board_graduation',
        'institute_post_graduation',
        'percentage_post_graduation',
        'year_of_passing_post_graduation',
        'board_post_graduation',

    ];
}
