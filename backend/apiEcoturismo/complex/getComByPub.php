<?php

include_once '../cors.php';
include_once '../conexion.php';

$id= $_GET['id_publicacion'];

$bd = obtenerConexion();
$sql = 'SELECT * from comentarios c WHERE c.id_publicacion' . ' = '. $id;    
$resultado = mysqli_query($bd, $sql);

echo json_encode(mysqli_fetch_all($resultado, MYSQLI_ASSOC));

cerrarConexion($bd);

?>