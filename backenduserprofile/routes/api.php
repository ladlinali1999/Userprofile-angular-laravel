<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ModuleperController;
use App\Http\Controllers\ModulenameController;
use App\Http\Controllers\FielddataController;
use App\Http\Controllers\FieldperController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResource('profile',ProfileController::class);
Route::apiResource('module_permission',ModuleperController::class);
Route::apiResource('module_name',ModulenameController::class);
Route::apiResource('field_data',FielddataController::class);
Route::apiResource('field_permission',FieldperController::class);

Route::get('/lastrecord', [App\Http\Controllers\ProfileController::class,'lastrecord'])->name('lastrecord');
Route::get('/getModuleper_id{pro_id}', [App\Http\Controllers\ModuleperController::class,'getModuleper_id'])->name('getModuleper_id');
Route::get('/getfielddata_id/{module_id}', [App\Http\Controllers\FielddataController::class,'getfielddata_id'])->name('getfielddata_id');
Route::get('/getFieldper_id/{module_id}', [App\Http\Controllers\FieldperController::class,'getFieldper_id'])->name('getFieldper_id');

// Route::post('/getFieldperddd_id/{module_id}', [App\Http\Controllers\FieldperController::class,'getFieldperddd_id'])->name('getFieldperddd_id');
// Route::post('/updatemoduleper', [App\Http\Controllers\ModuleperController::class,'updatemoduleper'])->name('updatemoduleper');
// Route::get('/dataget/{id}', [App\Http\Controllers\FielddataController::class,'dataget'])->name('dataget');
