<?php

include_once 'obtenerFromTableById.php';

$id= $_GET['id_ruta'];

$result = obtenerFromTableById("rutas", $id, "id_ruta");

echo json_encode($result)

?>