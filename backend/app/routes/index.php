<?php
app()->get('/', function() {
    return response()->json([
        'estado' => 'success',
        'mensaje' => '¡API del colegio funcionando al 100%!'
    ]);
});