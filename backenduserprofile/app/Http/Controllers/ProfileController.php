<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
 use App\Models\Profile;
 use DB;

class ProfileController extends Controller
{
  /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $Profiles = Profile::all();
      return response()->json($Profiles);
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
        // 'pro_id' => '',
        'name' => '',
        'description' => '',
        'status' => '',
        // 'status_confirmation' => ''

      ]);
  
      $newProfile = new Profile([
        // 'pro_id' => $request->get('pro_id'),
        'name' => $request->get('name'),
        'description' => $request->get('description'),
        'status' => $request->get('status'),
        // 'status_confirmation' => $request->get('status_confirmation')

      ]);
  
      $newProfile->save();
  
      return response()->json($newProfile);
    }
  
    /**
      * Display the specified resource.
      *
      * @param  int  $id
      * @return \Illuminate\Http\Response
      */
    public function show($id)
    {
      $Profile = Profile::findOrFail($id);
      return response()->json($Profile);
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
      $Profile = Profile::findOrFail($id);
  
      $request->validate([
        // 'pro_id' => '',
        'name' => 'required|max:255',
        'description' => 'required',
        'status' => 'required'
      ]);
      // $Profile->name = $request->get('pro_id');
      $Profile->name = $request->get('name');
      $Profile->description = $request->get('description');
      $Profile->status = $request->get('status');
      
  
      $Profile->save();
  
      return response()->json($Profile);
    }
  
    /**
      * Remove the specified resource from storage.
      *
      * @param  int  $id
      * @return \Illuminate\Http\Response
      */
    public function destroy($id)
    {
      $Profile = Profile::findOrFail($id);
      $Profile->delete();
  
      return response()->json($Profile::all());
    }


    public function lastrecord(){
      $last2 = DB::table('profile')->orderBy('pro_id', 'DESC')->first();
      return response()->json($last2);

    }
}