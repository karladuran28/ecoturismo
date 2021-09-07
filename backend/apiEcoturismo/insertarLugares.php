<?php

include_once 'cors.php';
include_once 'conexion.php';


$bd = obtenerConexion();
$_POST = json_decode(file_get_contents('php://input'), true);

$nombre = $_POST['nombre'];
$coordenadas = $_POST['coordenadas'];
$id_ruta = $_POST['id_ruta'];

$sql = 'INSERT INTO lugares (nombre,coordenadas,id_ruta) 
            VALUES ("' . $nombre . '", 
            "' . $coordenadas . '",
            ' . $id_ruta . ')';
    
if( mysqli_query($bd, $sql) ){
        echo "Se insertó el elemento exitosamente";
}
else{
        echo "Error" . $sql . mysqli_error($bd);
}
cerrarConexion($bd); 

?>