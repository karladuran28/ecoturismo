<?php

include_once 'cors.php';
include_once 'conexion.php';
$persona = ["usuario"=>"miau", "contrasena"=>"miau1234", "nombre"=> "gato", 
            "apellido"=> "ConBotas", "correo"=> "gato@gmail.com", 
            "foto_perfil"=>"https://i.imgur.com/PU4oYy0.png"];


$bd = obtenerConexion();
$sql = 'INSERT INTO personas (usuario,contrasena,nombre,apellido,correo,foto_perfil) 
            VALUES ("' . $persona["usuario"] . '", 
            "' . $persona["contrasena"] . '",
            "' . $persona["nombre"] . '",
            "' . $persona["apellido"] . '",
            "' . $persona["correo"] . '", 
            "' . $persona["foto_perfil"] . '") ';
    
if( mysqli_query($bd, $sql) ){
        echo "Se insertó el elemento exitosamente";
}
else{
        echo "Error";
}

cerrarConexion($bd);  

?>