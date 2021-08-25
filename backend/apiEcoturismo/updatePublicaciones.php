<?php

include_once 'cors.php';
include_once 'conexion.php';

$bd = obtenerConexion();

$id_usuario = $_POST['id_usuario'];
$nombre = $_POST['nombre'];
$likes = $_POST['likes'];
$id_publicaciones = $_POST['id_publicaciones'];


 $sql =  'UPDATE publicaciones
            SET nombre = "' . $nombre . '", 
           likes = "' . $likes . '",
           id_usuario = "' . $id_usuario . '"
            WHERE id_usuario = "' . $id_publicaciones'" ';
if( mysqli_query($bd, $sql) ){
        echo "Se actualizó el elemento exitosamente";
}
else{
        echo "Error" . $sql . mysqli_error($bd);
}
cerrarConexion($bd); 

?>