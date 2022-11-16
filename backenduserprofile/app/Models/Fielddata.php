<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fielddata extends Model
{
    use HasFactory;
    protected $table = 'field_data';
    protected $primaryKey = 'fielddata_id';
    protected $fillable =[
        'module_id',
        'field_name',
    
    ];
}
