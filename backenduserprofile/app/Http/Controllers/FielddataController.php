<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Fielddata;
use DB;
class FielddataController extends Controller
{
  /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
  public function index()
  {
    $Fielddatas = Fielddata::all();
    return response()->json($Fielddatas);
  }

  /**
    * Store a newly created resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
  public function store(Request $request)
  {
    $request->validate([
      'module_id' => '',
      'field_name' => ''
    ]);

    $newFielddata = new Fielddata([
      'module_id' => $request->get('module_id'),
      'field_name' => $request->get('field_name')
    ]);

    $newFielddata->save();

    return response()->json($newFielddata);
  }

  /**
    * Display the specified resource.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
  public function show($id)
  {
    $Fielddata = Fielddata::findOrFail($id);
    return response()->json($Fielddata);
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
    $Fielddata = Fielddata::findOrFail($id);

    $request->validate([
      'module_id' => '',
      'field_name' => ''
    ]);

    $Fielddata->module_id = $request->get('module_id');
    $Fielddata->field_name = $request->get('field_name');

    $Fielddata->save();

    return response()->json($Fielddata);
  }

  /**
    * Remove the specified resource from storage.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
  public function destroy($id)
  {
    $Fielddata = Fielddata::findOrFail($id);
    $Fielddata->delete();

    return response()->json($Fielddata::all());
  }
//for get field data using module_id
  public function getfielddata_id($module_id){

    $data=DB::table('field_data')
    ->select('field_data.*')
    ->where('module_id',$module_id)
    ->get();
    return response()->json($data);
}

// public function dataget($id){
// //return $module_id;
//   $data=DB::table('field_data')
//   ->select('field_data.*')
//   ->where('module_id',$id)
//   ->get();
//   return response()->json($data);
// }
}
