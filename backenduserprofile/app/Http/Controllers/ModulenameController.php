<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Modulename;

class ModulenameController extends Controller
{
  /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $Modulenames = Modulename::all();
      return response()->json($Modulenames);
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
        'modulename' => '',
        // 'edit_confirmation' => ''

      ]);
  
      $newModulename = new Modulename([
        'modulename' => $request->get('modulename'),
        // 'edit_confirmation' => $request->get('edit_confirmation')

      ]);
  
      $newModulename->save();
  
      return response()->json($newModulename);
    }
  
    /**
      * Display the specified resource.
      *
      * @param  int  $id
      * @return \Illuminate\Http\Response
      */
    public function show($id)
    {
      $Modulename = Modulename::findOrFail($id);
      return response()->json($Modulename);
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
      $Modulename = Modulename::findOrFail($id);
  
      $request->validate([
        'modulename' =>'',
      ]);

      $Modulename->modulename = $request->get('modulename');
    
      $Modulename->save();
  
      return response()->json($Modulename);
    }
  
    /**
      * Remove the specified resource from storage.
      *
      * @param  int  $id
      * @return \Illuminate\Http\Response
      */
    public function destroy($id)
    {
      $Modulename = Modulename::findOrFail($id);
      $Modulename->delete();
  
      return response()->json($Modulename::all());
    }
}
