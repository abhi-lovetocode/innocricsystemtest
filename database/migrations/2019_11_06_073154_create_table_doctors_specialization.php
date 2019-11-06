<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableDoctorsSpecialization extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_doctors_specialization', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('doctor_id');
            $table->unsignedInteger('s_id');
            $table->timestamps();
            $table->foreign('doctor_id')->references('id')->on('tbl_doctors')>onDelete('cascade');
            $table->foreign('s_id')->references('id')->on('tbl_specialization')>onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_doctors_specialization');
    }
}
