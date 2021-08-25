<?php

include_once '../cors.php';
include_once '../conexion.php';

$id_comentario = "";


if ( $_SERVER["REQUEST_METHOD"] == "POST" ) {
    $id_comentario = $_POST["id_comentario"];   
}

$bd = obtenerConexion();

$sql = "DELETE FROM comentarios WHERE id_comentario=" . strval($id_comentario);

if( mysqli_query($bd, $sql) ){
    echo "Se eliminó comentario exitosamente";
}
else{
    echo "Error" . $sql . mysqli_error($bd);
}
cerrarConexion($bd); 

?>
