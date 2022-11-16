<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Fieldper;
use DB;

class FieldperController extends Controller
{
  /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $Fieldpers = Fieldper::all();
      return response()->json($Fieldpers);
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
        'module_id'=> '',
        'modulename' => '',
        'pro_id'=> '',
        'fielddata_id' => '',
        'field_name'=> '',
        'readonly' => '',
        'write' => '',
        'invisible' => '',
        // 'edit_confirmation' => ''

      ]);
  
      $newFieldper = new Fieldper([
        'module_id' => $request->get('module_id'),
        'modulename' => $request->get('modulename'),
        'pro_id' => $request->get('pro_id'),
        'fielddata_id' => $request->get('fielddata_id'),
        'field_name' => $request->get('field_name'),
        'readonly' => $request->get('readonly'),
        'write' => $request->get('write'),
        'invisible' => $request->get('invisible'),
        // 'edit_confirmation' => $request->get('edit_confirmation')

      ]);
  
      $newFieldper->save();
  
      return response()->json($newFieldper);
    }
  
    /**
      * Display the specified resource.
      *
      * @param  int  $id
      * @return \Illuminate\Http\Response
      */
    public function show($id)
    {
      $Fieldper = Fieldper::findOrFail($id);
      return response()->json($Fieldper);
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
      $Fieldper = Fieldper::findOrFail($id);
  
      $request->validate([
        'module_id'=> '',
        'modulename' =>'',
        'pro_id'=> '',
        'fielddata_id' => '',
        'field_name' => '',
        'readonly' => '',
        'write' => '',
        'invisible' => ''
      ]);

      $Fieldper->module_id = $request->get('module_id');
      $Fieldper->pro_id = $request->get('pro_id');
      $Fieldper->modulename = $request->get('modulename');
      $Fieldper->fielddata_id = $request->get('fielddata_id');
      $Fieldper->field_name = $request->get('field_name');
      $Fieldper->readonly = $request->get('readonly');
      $Fieldper->write = $request->get('write');
      $Fieldper->invisible = $request->get('invisible');
      
  
      $Fieldper->save();
  
      return response()->json($Fieldper);
    }
  
    /**
      * Remove the specified resource from storage.
      *
      * @param  int  $id
      * @return \Illuminate\Http\Response
      */
    public function destroy($id)
    {
      $Fieldper = Fieldper::findOrFail($id);
      $Fieldper->delete();
  
      return response()->json($Fieldper::all());
    }

    public function getFieldper_id($module_id){

      $data=DB::table('field_permission')
      ->select('field_permission.*')
      ->where('module_id',$module_id)
      ->get();
      return response()->json($data);
  }
 
}
