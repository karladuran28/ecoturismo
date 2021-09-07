<?php

include_once 'cors.php';
include_once 'conexion.php';


$bd = obtenerConexion();
$_POST = json_decode(file_get_contents('php://input'), true);
$url = $_POST['url'];
$id_lugar = $_POST['id_lugar'];

$sql = 'INSERT INTO fotos (url, id_lugar) 
            VALUES ("' . $url . '", 
            "' . $id_lugar . '")' ;
    
if( mysqli_query($bd, $sql) ){
        echo "Se insertó el elemento exitosamente";
}
else{
    echo "Error" . $sql . mysqli_error($bd);
}

cerrarConexion($bd);  

?>