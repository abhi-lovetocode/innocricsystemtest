<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Response;
use Validator;
use App\Model\Specialization;

class SpecializationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $slist = Specialization::get();

        return view('specialization.index', compact('slist'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('specialization.create');
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

            'specialization_name' => 'required|string|max:255|unique:tbl_specialization',
            ]);

        if ($validator->passes()) {

            Specialization::create([
                'specialization_name' => request('specialization_name'),
                ]);

            return response()->json(['code' => 201, 'message' => 'Specilization Added Successfully']);
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
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $record = Specialization::where('id',$id)->first();
        
        return view('specialization.edit', compact('record'));
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
        $validator = Validator::make($request->all(), [
            'specialization_name' => [ 'required','string','max:255', Rule::unique('tbl_specialization')->ignore($id)],
            ]);

        if ($validator->passes()) {

            Specialization::where('id',$id)
            ->update([
                'specialization_name' => request('specialization_name'),
                ]);

            return response()->json(['code' => 201, 'message' => 'Specilization Updated Successfully']);
        }

        return response()->json(['code' => 509, 'error' => $validator->getMessageBag()->toArray()]);
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
