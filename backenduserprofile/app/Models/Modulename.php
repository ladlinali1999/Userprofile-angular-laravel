<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Modulename extends Model
{
    use HasFactory;
    protected $table = 'module_name';
    protected $primaryKey = 'module_id ';
    protected $fillable =[
        'modulename',
    
    ];
}
