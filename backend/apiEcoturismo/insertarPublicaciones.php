<?php

include_once 'cors.php';
include_once 'conexion.php';
$publicacion = ["id_usuario"=> 5, "nombre"=>"Nueva publicacion", "likes"=> 4];

$bd = obtenerConexion();
    $sql = 'INSERT INTO publicaciones (id_usuario,nombre,likes) 
            VALUES ("' . $publicacion["id_usuario"] . '", 
            "' . $publicacion["nombre"] . '",
            ' . $publicacion["likes"] . ')';
    
    if( mysqli_query($bd, $sql) ){
        echo "Se insertó el elemento exitosamente";
    }
    else{
        echo "Error" . $sql . mysqli_error($bd);
    }
    cerrarConexion($bd); 

?>