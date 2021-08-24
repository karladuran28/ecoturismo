<?php

include_once 'obtenerFromTableById.php';
$id= $_GET['id_lugar'];
$result = obtenerFromTableById("lugares", $id, "id_lugar");

echo json_encode($result)

?>