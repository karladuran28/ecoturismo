<?php

include_once 'obtenerFromTableById.php';
$id= $_GET['id_etiqueta'];
$result = obtenerFromTableById("etiquetas", $id, "id_etiqueta");

echo json_encode($result)

?>