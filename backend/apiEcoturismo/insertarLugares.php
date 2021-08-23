<?php

include_once 'cors.php';
include_once 'conexion.php';
$lugar = ["nombre"=>"Guayaquil", "coordenadas"=>"-4.063270910462459,-78.95686279297236", "id_ruta"=> 4];

$bd = obtenerConexion();
    $sql = 'INSERT INTO lugares (nombre,coordenadas,id_ruta) 
            VALUES ("' . $lugar["nombre"] . '", 
            "' . $lugar["coordenadas"] . '",
            ' . $lugar["id_ruta"] . ')';
    
    if( mysqli_query($bd, $sql) ){
        echo "Se insertó el elemento exitosamente";
    }
    else{
        echo "Error" . $sql . mysqli_error($bd);
    }
    cerrarConexion($bd); 

?>