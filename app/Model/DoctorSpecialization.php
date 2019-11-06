<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class DoctorSpecialization extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'tbl_doctors_specialization';

    protected $fillable = ['doctor_id','s_id'];


    /**
 	* Get the doctor.
 	*/
 	public function doctor()
 	{
 		return $this->belongsTo('App\Model\Doctor', 'id', 'doctor_id');
 	}

	/**
 	* Get the specialization.
 	*/
 	public function specialization()
 	{
 		return $this->belongsTo('App\Model\Specialization', 'id', 's_id');
 	}
 }
