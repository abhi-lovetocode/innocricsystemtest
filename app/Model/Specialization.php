<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Specialization extends Model
{
	/**
     * The table associated with the model.
     *
     * @var string
     */
	protected $table = 'tbl_specialization';

	protected $fillable = ['specialization_name'];
}
