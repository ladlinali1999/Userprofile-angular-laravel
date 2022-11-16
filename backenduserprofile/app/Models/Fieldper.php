<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fieldper extends Model
{
    use HasFactory;
    protected $table = 'field_permission';
    protected $primaryKey = 'fieldper_id';
    protected $fillable =[
        'module_id',
        'modulename',
        'pro_id',
        'fielddata_id',
        'field_name',
        'readonly',
        'write',
        'invisible',
        

    ];
}

