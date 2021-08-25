<?php

require_once '../cors.php';
require_once '../conexion.php';

function obtenerDicFromTabla($tabla){
    $bd  = obtenerConexion();
    $sql = $bd -> prepare("SELECT * from " . $tabla);
    $sql -> execute();
    $data = $sql -> get_result();
    $res = [];

    while($row = $data -> fetch_assoc()){
        array_push($res, $row);
    }

    cerrarConexion($bd);

    return $res;
}

function validarUsuario($cadena){
    
    $coincide = preg_match("/^[a-zA-Z][a-zA-Z0-9]{4,}$/", $cadena);
    
    if ( !$coincide ) {
        return false;
    }

    $usuarios = obtenerDicFromTabla("personas");

    $esta_enBase = count(array_filter( $usuarios, function( $user ) use( $cadena ) {
        return $user["usuario"] == $cadena;
    })) > 0;

    return !$esta_enBase;
}

//echo (validarUsuario("acoby") ? "usuario valido" : "usuario no valido"); 

function validarContrasena($cadena){

    return preg_match("/^(?!.*(abc|hola|123|contrasena))([a-zA-Z0-9@\$!%\*#\?&]{5,})$/", $cadena);

}

//echo (validarContrasena("aco!!!456#@") ? "Contrasena valida" : "Contrasena no valida"); 

/* también sirve para validar apellido*/
function validarNombre($cadena){

    return preg_match("/^[a-zA-Z]{2,}$/", $cadena);

}

function validarCorreo($cadena){

    return preg_match("/^[a-z]+[a-z0-9_\.]*@[a-z]{2,15}(\.edu)?\.[a-z]{2,4}$/", $cadena);

}

echo (validarCorreo("kaduran1998@gmail") ? "Correo valido" : "Correo no valido");

?>