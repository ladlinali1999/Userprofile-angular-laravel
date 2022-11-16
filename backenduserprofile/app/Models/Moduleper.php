<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Moduleper extends Model
{
    use HasFactory;
    protected $table = 'module_permission';
    protected $primaryKey = 'mper_id';
    protected $fillable =[
        'module_id',
        'pro_id',
        'module_name',
        'view',
        'create',
        'edit',
        'delete',
        

    ];
}
