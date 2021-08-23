<?php

include_once 'cors.php';
include_once 'conexion.php';
$rutaTag = ["id_ruta"=> 1, "id_etiqueta"=>1];

$bd = obtenerConexion();
    $sql = 'INSERT INTO rel_rutaTag (id_ruta,id_etiqueta) 
            VALUES ("' . $rutaTag["id_ruta"] . '", 
            "' . $rutaTag["id_etiqueta"] . '")';
    
    if( mysqli_query($bd, $sql) ){
        echo "Se insertó el elemento exitosamente";
    }
    else{
        echo "Error" . $sql . mysqli_error($bd);
    }
    cerrarConexion($bd); 

?>