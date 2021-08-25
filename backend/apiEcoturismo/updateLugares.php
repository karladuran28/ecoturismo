<?php

include_once 'cors.php';
include_once 'conexion.php';


$bd = obtenerConexion();

$nombre = $_POST['nombre'];
$coordenadas = $_POST['coordenadas'];
$id_ruta = $_POST['id_ruta'];

$sql =  'UPDATE lugares
            SET nombre= "' . $nombre . '", coordenadas = "' . $coordenadas . '"
            WHERE id_lugar = "' . $id_ruta.'" ';
    
if( mysqli_query($bd, $sql) ){
        echo "Se actualizó el elemento exitosamente";
}
else{
        echo "Error" . $sql . mysqli_error($bd);
}
cerrarConexion($bd); 

?>