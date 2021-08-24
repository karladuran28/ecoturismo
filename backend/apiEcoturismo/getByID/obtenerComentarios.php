<?php

include_once 'obtenerFromTableById.php';
$id= $_GET['id_comentario'];
$result = obtenerFromTableById("comentarios", $id, "id_comentario");

echo json_encode( $result );

?>