<?php

include_once '../cors.php';
include_once '../conexion.php';

$id_lugar = "";


if ( $_SERVER["REQUEST_METHOD"] == "POST" ) {
    $id_lugar = $_POST["id_lugar"];   
}

$bd = obtenerConexion();

$sql = "DELETE FROM lugares WHERE id_lugar=" . strval($id_lugar);

if( mysqli_query($bd, $sql) ){
    echo "Se eliminó lugar exitosamente";
}
else{
    echo "Error" . $sql . mysqli_error($bd);
}
cerrarConexion($bd); 

?>