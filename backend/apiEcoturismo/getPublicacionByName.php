<?php

include_once 'cors.php';
include_once 'conexion.php';
$bd = obtenerConexion();
$_POST = json_decode(file_get_contents('php://input'), true);

$name = $_POST['nombre'];

$sql = 'SELECT * from publicaciones WHERE nombre LIKE "%'.$name.'%"' ;
$resultado = mysqli_query($bd, $sql);

echo json_encode(mysqli_fetch_all($resultado, MYSQLI_ASSOC));
$resultado->free();
cerrarConexion($bd); 

?>