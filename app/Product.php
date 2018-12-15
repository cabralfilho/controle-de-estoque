<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    // Permitindo que as variaveis sejam tratadas de forma automatica pelo create

    protected  $fillable = [
        'name','description','value'
    ];
}
