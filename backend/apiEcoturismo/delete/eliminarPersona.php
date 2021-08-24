<?php

include_once '../cors.php';
include_once '../conexion.php';

$id_persona = "";


if ( $_SERVER["REQUEST_METHOD"] == "POST" ) {
    $id_persona = $_POST["id_persona"];   
}

$bd = obtenerConexion();

$sql = "DELETE FROM personas WHERE id_persona=" . strval($id_persona);

if( mysqli_query($bd, $sql) ){
    echo "Se eliminó persona exitosamente";
}
else{
    echo "Error" . $sql . mysqli_error($bd);
}
cerrarConexion($bd); 

?>