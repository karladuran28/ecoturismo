<?php

include_once 'cors.php';
include_once 'conexion.php';

$bd = obtenerConexion();

$_POST = json_decode(file_get_contents('php://input'), true);
$id_usuario = $_POST['id_usuario'];
$nombre = $_POST['nombre'];
$likes = $_POST['likes'];


$sql = 'INSERT INTO publicaciones (id_usuario,nombre,likes) 
            VALUES ("' . $id_usuario . '", 
            "' . $nombre . '",
            ' . $likes . ')';
    
if( mysqli_query($bd, $sql) ){
        echo "Se insertó el elemento exitosamente";
}
else{
        echo "Error" . $sql . mysqli_error($bd);
}
cerrarConexion($bd); 

?>