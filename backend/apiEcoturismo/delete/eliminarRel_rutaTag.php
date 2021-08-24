<?php

include_once '../cors.php';
include_once '../conexion.php';

$id_etiqueta = $id_ruta = "";


if ( $_SERVER["REQUEST_METHOD"] == "POST" ) {
    $id_etiqueta    = $_POST["id_etiqueta"];
    $id_ruta        = $_POST["id_ruta"];   
}

$bd = obtenerConexion();

$sql = "DELETE FROM rel_rutaTag WHERE id_ruta=" . strval($id_ruta) . " AND id_etiqueta=" . strval($id_etiqueta);

if( mysqli_query($bd, $sql) ){
    echo "Se eliminó relación etiqueta y ruta exitosamente";
}
else{
    echo "Error" . $sql . mysqli_error($bd);
}
cerrarConexion($bd); 

?>