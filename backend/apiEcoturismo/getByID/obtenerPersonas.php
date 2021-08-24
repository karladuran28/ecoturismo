<?php

include_once 'obtenerFromTableById.php';
$id= $_GET['id_usuario'];
$result = obtenerFromTableById("personas", $id, "id_usuario");

echo json_encode($result)

?>