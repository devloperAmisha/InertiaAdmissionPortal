<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Course;

class CourseController extends Controller
{
   public function index(){
    $couses = Course::paginate(5);
    return inertia('Admin/Course/Index', ['courses' => $couses]);
   }
   public function create(){
    return inertia('Admin/Course/Create');
   }
   public function store(Request $request){

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'duration' => 'required',
            'fees' => 'required',
            'eligibility' => 'required|string|max:255',
        ]);

        $course = Course::create($validated);

        return redirect('/admin/courses')->with('success', 'Course created successfully.');
    }

    public function edit(Course $course){
        return inertia('Admin/Course/Edit', ['course' => $course]);
    }
    public function update(Request $request, Course $course){
        try{
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'description' => 'required|string|max:255',
                'duration' => 'required',
                'fees' => 'required',
                'eligibility' => 'required|string|max:255',
            ]);

            $course->update($validated);

            return redirect('/admin/courses')->with('success', 'Course updated successfully.');
        }
        catch(\Exception $e){
            return redirect('/admin/courses')->with('error', 'Course cannot be updated. Please try again.');
        }
    }

    public function destroy(Course $course){
        try{
            $course->delete();
            return redirect('/admin/courses')->with('success', 'Course deleted successfully.');
        }
        catch(\Exception $e){
            return redirect('/admin/courses')->with('error', 'Course cannot be updated. Please try again.');
        }
    }
}
