<?php

include_once 'obtenerFromTableById.php';
$id= $_GET['id_foto'];
$result = obtenerFromTableById("fotos", $id, "id_foto");

echo json_encode($result)

?>