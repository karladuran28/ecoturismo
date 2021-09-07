<?php

include_once 'cors.php';
include_once 'conexion.php';

$bd = obtenerConexion();
$_POST = json_decode(file_get_contents('php://input'), true);

$nombre = $_POST['nombre'];
$duracion = $_POST['duracion'];
$id_publicacion = $_POST['id_publicacion'];

$sql = 'INSERT INTO rutas (nombre, duracion, id_publicacion) 
            VALUES ("' . $nombre . '", 
            "' . $duracion . '",
            '. $id_publicacion .')';
    
if( mysqli_query($bd, $sql) ){
        echo "Se insertó el elemento exitosamente";
}
else{
        echo "Error" . $sql . mysqli_error($bd);
}
cerrarConexion($bd); 

?>