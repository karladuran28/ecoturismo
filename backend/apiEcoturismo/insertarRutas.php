<?php

include_once 'cors.php';
include_once 'conexion.php';
$ruta = ["nombre"=> "Ruta del sol", "duracion"=>"1 semana", "id_publicacion"=>5];

$bd = obtenerConexion();
    $sql = 'INSERT INTO rutas (nombre, duracion, id_publicacion) 
            VALUES ("' . $ruta["nombre"] . '", 
            "' . $ruta["duracion"] . '",
            '. $ruta["id_publicacion"] .')';
    
    if( mysqli_query($bd, $sql) ){
        echo "Se insertó el elemento exitosamente";
    }
    else{
        echo "Error" . $sql . mysqli_error($bd);
    }
    cerrarConexion($bd); 

?>