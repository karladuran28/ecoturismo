<?php

include_once '../cors.php';
include_once '../conexion.php';

$id_publicacion = "";


if ( $_SERVER["REQUEST_METHOD"] == "POST" ) {
    $id_publicacion = $_POST["id_publicacion"];   
}

$bd = obtenerConexion();

$sql = "DELETE FROM publicaciones WHERE id_publicacion=" . strval($id_publicacion);

if( mysqli_query($bd, $sql) ){
    echo "Se eliminó publicacion exitosamente";
}
else{
    echo "Error" . $sql . mysqli_error($bd);
}
cerrarConexion($bd); 

?>