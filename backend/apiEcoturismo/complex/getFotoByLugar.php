<?php

include_once '../cors.php';
include_once '../conexion.php';

$id= $_GET['id_lugar'];

$bd = obtenerConexion();
$sql = 'SELECT url, f.id_lugar from fotos f WHERE f.id_lugar' . ' = '. $id;    
$resultado = mysqli_query($bd, $sql);

echo json_encode(mysqli_fetch_all($resultado, MYSQLI_ASSOC));

cerrarConexion($bd);

?>