<?php

include_once 'cors.php';
include_once 'conexion.php';


$nombre = $_POST['nombre'];
$id_etiqueta = $_POST['id_etiqueta'];

$bd = obtenerConexion();


$sql =  'UPDATE etiquetas
        SET nombre = "' . $nombre . '"
        WHERE id_etiqueta = "' . $id_etiqueta.'" ';

    
if( mysqli_query($bd, $sql) ){
        echo "Se actualizó el elemento exitosamente";
}
else{
        echo "Error";
}

cerrarConexion($bd);  

?>