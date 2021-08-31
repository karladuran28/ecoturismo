<?php

include_once '../cors.php';
include_once '../conexion.php';

$id= $_GET['id_foto'];

$bd = obtenerConexion();
$sql = 'SELECT pub.id_publicacion from publicaciones pub JOIN rutas ru ON ru.id_publicacion = pub.id_publicacion JOIN lugares lu ON lu.id_ruta = ru.id_ruta JOIN fotos fo ON fo.id_lugar = lu.id_lugar WHERE fo.id_foto' . ' = '. $id;    
$resultado = mysqli_query($bd, $sql);

echo json_encode(mysqli_fetch_all($resultado, MYSQLI_ASSOC));

cerrarConexion($bd);

?>