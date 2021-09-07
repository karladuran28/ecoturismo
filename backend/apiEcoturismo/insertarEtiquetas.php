<?php

include_once 'cors.php';
include_once 'conexion.php';

$_POST = json_decode(file_get_contents('php://input'), true);
$nombre = $_POST['nombre'];

$bd = obtenerConexion();
$sql = 'INSERT INTO etiquetas (nombre) 
            VALUES ("' . $nombre . '") ';
    
if( mysqli_query($bd, $sql) ){
        echo "Se insertó el elemento exitosamente";
}
else{
        echo "Error";
}

cerrarConexion($bd);  

?>