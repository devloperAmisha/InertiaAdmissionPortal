<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Country;
use App\Models\State;
use App\Models\City;

class AddressController extends Controller
{
    public function getCountries(){
        $countries = Country::all();
        return response()->json($countries);
    }

    public function getStates($countryId){
        $states = State::where('country_id', $countryId)->get();
        return response()->json($states);
    }

    public function getCities($stateId){
        $cities = City::where('state_id', $stateId)->get();
        return response()->json($cities);
    }
}
