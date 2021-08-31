<?php

include_once '../cors.php';
include_once '../conexion.php';

$id= $_GET['id_publicacion'];

$bd = obtenerConexion();
$sql = 'SELECT * from rutas WHERE id_publicacion' . ' = '. $id;    
$resultado = mysqli_query($bd, $sql);

echo json_encode($resultado->fetch_assoc());

cerrarConexion($bd);

?>