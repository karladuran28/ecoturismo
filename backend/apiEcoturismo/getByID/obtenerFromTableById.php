<?php

include_once '../cors.php';
include_once '../conexion.php';


function obtenerFromTableById( $nombreTabla, $id, $idColumnName){
    $bd = obtenerConexion();
    $sql = 'SELECT * from ' . $nombreTabla . ' WHERE '. $idColumnName . ' = '. $id;    
    $resultado = mysqli_query($bd, $sql);

    cerrarConexion($bd);
    return $resultado->fetch_assoc();


}

?>