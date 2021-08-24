<?php

include_once '../cors.php';
include_once '../conexion.php';

$id_etiqueta = "";


if ( $_SERVER["REQUEST_METHOD"] == "POST" ) {
    $id_etiqueta = $_POST["id_etiqueta"];   
}

$bd = obtenerConexion();

$sql = "DELETE FROM etiquetas WHERE id_etiqueta=" . strval($id_etiqueta);

if( mysqli_query($bd, $sql) ){
    echo "Se eliminó etiqueta exitosamente";
}
else{
    echo "Error" . $sql . mysqli_error($bd);
}
cerrarConexion($bd); 

?>