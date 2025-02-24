<?php
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});
Route::prefix('auth')->group(function(){

    Route::get('/register', [App\Http\Controllers\Auth\RegisterController::class,'index'])->name('register');
    Route::post('/register', [App\Http\Controllers\Auth\RegisterController::class,'registers'])->name('register');


    Route::get('/login', [App\Http\Controllers\Auth\LoginController::class,'index'])->name('login');
    Route::post('/login', [App\Http\Controllers\Auth\LoginController::class,'authenticate'])->name('login');
    Route::get('/logout', [App\Http\Controllers\Auth\LogoutController::class,'logout'])->name('logout');

});

// CLIENT ROUTES
Route::get('/apply', [App\Http\Controllers\Client\ApplicantController::class, 'index'])->name('apply');
Route::post('/apply', [App\Http\Controllers\Client\ApplicantController::class, 'store'])->name('apply');

//Applicant ROUTES
Route::prefix('applicant')->middleware(['auth', 'role:applicant'])->group(function(){
    Route::get('/dashboard', [App\Http\Controllers\Client\ApplicantController::class, 'dashboard'])->name('dashboard');
     Route::get('/profile/edit/{applicant}', [App\Http\Controllers\Client\ApplicantController::class, 'edit'])->name('applicant.profile.edit');

     Route::post('/profile/edit/{applicant}', [App\Http\Controllers\Client\ApplicantController::class, 'update'])->name('applicant.profile.update');

});

// ADMIN ROUTES
Route::prefix('admin')->middleware(['auth', 'role:admin'])->group(function(){
    Route::get('/dashboard', [App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('admin.dashboard');

    Route::resource('courses', App\Http\Controllers\Admin\CourseController::class);

});

// API ROUTES
Route::prefix('api')->group(function(){
    Route::get('/countries', [App\Http\Controllers\Api\AddressController::class, 'getCountries']);
    Route::get('/states/{countryId}', [App\Http\Controllers\Api\AddressController::class, 'getStates']);
    Route::get('/cities/{stateId}', [App\Http\Controllers\Api\AddressController::class, 'getCities']);
});
