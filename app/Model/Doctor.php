<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\Model\DoctorSpecialization;

class Doctor extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'tbl_doctors';

    protected $fillable = ['doctor_name'];


	/**
     * Get the list of doctore specialization.
     */
	public function specializations()
	{
		return $this->hasMany('App\Model\DoctorSpecialization','doctor_id','id');
	}
}
