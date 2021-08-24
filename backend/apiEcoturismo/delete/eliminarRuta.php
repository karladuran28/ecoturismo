<?php

include_once '../cors.php';
include_once '../conexion.php';

$id_ruta = "";


if ( $_SERVER["REQUEST_METHOD"] == "POST" ) {
    $id_ruta = $_POST["id_ruta"];   
}

$bd = obtenerConexion();

$sql = "DELETE FROM rutas WHERE id_ruta=" . strval($id_ruta);

if( mysqli_query($bd, $sql) ){
    echo "Se eliminó ruta exitosamente";
}
else{
    echo "Error" . $sql . mysqli_error($bd);
}
cerrarConexion($bd); 

?>