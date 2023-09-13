<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->integer('member_id');
            $table->string('name');
            $table->string('idNo');
            $table->string('address');
            $table->integer('contactNo');
            $table->boolean('gender');
            $table->integer('familyMembers');
            $table->date('membershipDate');
            $table->string('mothersName');
            $table->string('fathersName');
            $table->string('childrensName');
            $table->string('HusbandsorWifesname');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
