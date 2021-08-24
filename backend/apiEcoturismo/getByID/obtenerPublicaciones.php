<?php

include_once 'obtenerFromTableById.php';
$id= $_GET['id_publicacion'];
$result = obtenerFromTableById("publicaciones", $id, "id_publicacion");

echo json_encode($result)

?>