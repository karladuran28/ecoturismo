<?php

include_once '../cors.php';
include_once '../conexion.php';

$id= $_GET['id_comentario'];

$bd = obtenerConexion();
$sql = 'SELECT p.id_usuario, p.nombre, p.foto_perfil, c.id_comentario from personas p JOIN comentarios c ON c.id_usuario = p.id_usuario WHERE c.id_comentario' . ' = '. $id;    
$resultado = mysqli_query($bd, $sql);

echo json_encode(mysqli_fetch_all($resultado, MYSQLI_ASSOC));

cerrarConexion($bd);

?>