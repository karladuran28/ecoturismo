<?php

include_once '../cors.php';
include_once '../conexion.php';

$id_foto = "";


if ( $_SERVER["REQUEST_METHOD"] == "POST" ) {
    $id_foto = $_POST["id_foto"];   
}

$bd = obtenerConexion();

$sql = "DELETE FROM fotos WHERE id_foto=" . strval($id_foto);

if( mysqli_query($bd, $sql) ){
    echo "Se eliminó foto exitosamente";
}
else{
    echo "Error" . $sql . mysqli_error($bd);
}
cerrarConexion($bd); 

?>