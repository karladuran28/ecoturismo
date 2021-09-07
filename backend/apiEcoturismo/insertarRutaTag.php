<?php

include_once 'cors.php';
include_once 'conexion.php';

$bd = obtenerConexion();
$_POST = json_decode(file_get_contents('php://input'), true);

$id_ruta = $_POST['id_ruta'];
$id_etiqueta = $_POST['id_etiqueta'];

$sql = 'INSERT INTO rel_rutaTag (id_ruta,id_etiqueta) 
            VALUES ("' . $id_ruta . '", 
            "' . $id_etiqueta . '")';
    
if( mysqli_query($bd, $sql) ){
        echo "Se insertó el elemento exitosamente";
}
else{
        echo "Error" . $sql . mysqli_error($bd);
}
cerrarConexion($bd); 

?>