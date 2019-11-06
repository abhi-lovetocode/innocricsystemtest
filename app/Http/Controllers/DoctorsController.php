<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Response;
use Validator;
use App\Model\Specialization;
use App\Model\Doctor;
use App\Model\DoctorSpecialization;

class DoctorsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $doctors = Doctor::get();
        return view('doctors.index', compact('doctors'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $slist = Specialization::get();
        return view('doctors.create', compact('slist'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [

            'doctor_name' => 'required|string|max:255',
            'specialization' => 'required|array',
            ]);

        if ($validator->passes()) {

            $doctor = Doctor::create([
                'doctor_name' => request('doctor_name')
                ]);

            $specialization = $request->input('specialization');

            foreach ($specialization as $value) {
                DoctorSpecialization::create([
                    'doctor_id' => $doctor->id,
                    's_id' => $value
                    ]);
            }

            return response()->json(['code' => 201, 'message' => 'Doctore Added Successfully']);
        }

        return response()->json(['code' => 509, 'error' => $validator->getMessageBag()->toArray()]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $record = Doctor::where('id',$id)->first();

        $slist = Specialization::get();

        $specializations = DoctorSpecialization::where('doctor_id',$id)->get();
        
        return view('doctors.edit', compact('record','slist','specializations'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
