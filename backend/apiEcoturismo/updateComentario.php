<?php

include_once 'cors.php';
include_once 'conexion.php';

$bd = obtenerConexion();


$contenido = $_POST['contenido'];
$id_usuario = $_POST['id_usuario'];
$id_publicacion = $_POST['id_publicacion'];


$sql =  'UPDATE comentarios
        SET contenido = "' . $contenido . '",  id_usuario = "' . $id_usuario . '", id_publicacion = "' . $id_publicacion . '" 
        WHERE id_usuario = "' . $id_usuario .'" and id_publicacion = "' . $id_publicacion . '" ';


if( mysqli_query($bd, $sql) ){
    echo "Se actualizó el elemento exitosamente";
}
else{
    echo "Error" . $sql . mysqli_error($bd);
}
cerrarConexion($bd);  

?>