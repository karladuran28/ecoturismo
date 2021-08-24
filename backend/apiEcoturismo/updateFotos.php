<?php

include_once 'cors.php';
include_once 'conexion.php';


$bd = obtenerConexion();

$url = $_POST['url'];
$id_lugar = $_POST['id_lugar'];
$sql =  'UPDATE fotos
            SET url  = "' . $url . '"
            WHERE id_lugar = "' . $id_lugar.'" ';
    
if( mysqli_query($bd, $sql) ){
        echo "Se actualizó el elemento exitosamente";
}
else{
    echo "Error" . $sql . mysqli_error($bd);
}

cerrarConexion($bd);  

?>