<?php

include_once 'cors.php';
include_once 'conexion.php';

$bd = obtenerConexion();

$nombre = $_POST['nombre'];
$duracion = $_POST['duracion'];
$id_publicacion = $_POST['id_publicacion'];

$sql =  'UPDATE rutas
        SET nombre = "' . $nombre . '", duracion = "' . $duracion. '"
        WHERE id_publiacion = "' . $id_publicacion"' ";

if( mysqli_query($bd, $sql) ){
        echo "Se actualizó el elemento exitosamente";
}
else{
        echo "Error" . $sql . mysqli_error($bd);
}
cerrarConexion($bd); 

?>