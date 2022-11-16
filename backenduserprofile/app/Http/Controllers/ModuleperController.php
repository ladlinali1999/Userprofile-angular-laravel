<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Moduleper;
use DB;

class ModuleperController extends Controller
{
  /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $Modulepers = Moduleper::all();
      return response()->json($Modulepers);
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
        'pro_id'=> '',
        'module_name' => '',
        'view' => '',
        'create' => '',
        'edit' => '',
        'delete' => '',
        // 'edit_confirmation' => ''

      ]);
  
      $newModuleper = new Moduleper([
        'module_id' => $request->get('module_id'),
        'pro_id' => $request->get('pro_id'),
        'module_name' => $request->get('module_name'),
        'view' => $request->get('view'),
        'create' => $request->get('create'),
        'edit' => $request->get('edit'),
        'delete' => $request->get('delete'),
        // 'edit_confirmation' => $request->get('edit_confirmation')

      ]);
  
      $newModuleper->save();
  
      return response()->json($newModuleper);
    }
  
    /**
      * Display the specified resource.
      *
      * @param  int  $id
      * @return \Illuminate\Http\Response
      */
    public function show($id)
    {
      $Moduleper = Moduleper::findOrFail($id);
      return response()->json($Moduleper);
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
      $Moduleper = Moduleper::findOrFail($id);
  
      $request->validate([
        'module_id'=> '',
        'pro_id'=> '',
        'module_name' =>'',
        'view' => '',
        'create' => '',
        'edit' => '',
        'delete' => ''
      ]);

      $Moduleper->module_name = $request->get('module_id');
      $Moduleper->module_name = $request->get('pro_id');
      $Moduleper->module_name = $request->get('module_name');
      $Moduleper->view = $request->get('view');
      $Moduleper->create = $request->get('create');
      $Moduleper->edit = $request->get('edit');
      $Moduleper->delete = $request->get('delete');
      
  
      $Moduleper->save();
  
      return response()->json($Moduleper);
    }
  
    /**
      * Remove the specified resource from storage.
      *
      * @param  int  $id
      * @return \Illuminate\Http\Response
      */
    public function destroy($id)
    {
      $Moduleper = Moduleper::findOrFail($id);
      $Moduleper->delete();
  
      return response()->json($Moduleper::all());
    }


    public function getModuleper_id($pro_id){

      $data=DB::table('module_permission')
      ->select('module_permission.*')
      ->where('pro_id',$pro_id)
      ->get();
      return response()->json($data);
  }

//   public function updatemoduleper(Request $request){
//     // dd($request->all());
//     $Moduleper = Moduleper::
//         where(['pro_id' => $request->get('pro_id')
//         ])
//         ->update([
//             'view' => $request->get('view'),
//             'create' => $request->get('create'),
//             'edit' => $request->get('edit'),
//             'delete' => $request->get('delete'),

//         ]);
//     return $Moduleper;
// }

}