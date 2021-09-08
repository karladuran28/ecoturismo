<?php

include_once 'cors.php';
include_once 'conexion.php';

$bd = obtenerConexion();
$_POST = json_decode(file_get_contents('php://input'), true);

$likes = $_POST['likes'];
$id_publicacion = $_POST['id_publicacion'];


 $sql =  'UPDATE publicaciones
            SET likes = "' . $likes . '"
            WHERE id_publicacion = "' . $id_publicacion .'" ';
if( mysqli_query($bd, $sql) ){
        echo "Se actualizó el elemento exitosamente";
}
else{
        echo "Error" . $sql . mysqli_error($bd);
}
cerrarConexion($bd); 

?>