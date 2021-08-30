<?php

include_once 'cors.php';
include_once 'conexion.php';

$bd = obtenerConexion();


$contenido = $_POST['contenido'];
$id_comentario = $_POST['id_comentario'];


$sql =  'UPDATE comentarios
        SET contenido = "' . $contenido . '" 
        WHERE id_comentario = "' . $id_comentario .'"';


if( mysqli_query($bd, $sql) ){
    echo "Se actualizó el elemento exitosamente";
}
else{
    echo "Error" . $sql . mysqli_error($bd);
}
cerrarConexion($bd);  

?>