<?php

include_once 'cors.php';
include_once 'conexion.php';

$bd = obtenerConexion();

$nombre = $_POST['nombre'];
$duracion = $_POST['duracion'];
$id_publicacion = $_POST['id_publicacion'];
$id_ruta = $_POST['id_ruta'];

$sql =  'UPDATE rutas SET nombre = "' . $nombre . '" , duracion = "' . $duracion. '" , id_publicacion = "' . $id_publicacion . '"
        WHERE id_ruta = "' . $id_ruta .'" ';

if( mysqli_query($bd, $sql) ){
        echo "Se actualizó el elemento exitosamente";
}
else{
        echo "Error" . $sql . mysqli_error($bd);
}
cerrarConexion($bd); 

?>