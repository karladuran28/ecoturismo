<?php

include_once 'cors.php';
include_once 'conexion.php';
$etiquetas = ["nombre"=>"animales2"];


$bd = obtenerConexion();
$sql = 'INSERT INTO etiquetas (nombre) 
            VALUES ("' . $etiquetas["nombre"] . '") ';
    
if( mysqli_query($bd, $sql) ){
        echo "Se insertó el elemento exitosamente";
}
else{
        echo "Error";
}

cerrarConexion($bd);  

?>