<?php

include_once '../cors.php';
include_once '../conexion.php';

$id= $_GET['id_ruta'];

$bd = obtenerConexion();
$sql = 'SELECT lu.id_lugar, lu.nombre, lu.coordenadas from lugares lu JOIN rutas ru ON ru.id_ruta = lu.id_ruta WHERE ru.id_ruta' . ' = '. $id;    
$resultado = mysqli_query($bd, $sql);

echo json_encode(mysqli_fetch_all($resultado, MYSQLI_ASSOC));

cerrarConexion($bd);

?>