<?php

include_once 'cors.php';
include_once 'conexion.php';

$bd = obtenerConexion();

$id_ruta = $_POST['id_ruta'];
$id_etiqueta = $_POST['id_etiqueta'];

$sql =  'UPDATE rel_rutaTag
        SET id_ruta = "' . $id_ruta . '", 
           id_etiqueta = "' . $id_etiqueta . 
            WHERE id_ruta = "' . $id_ruta . '";
    
if( mysqli_query($bd, $sql) ){
        echo "Se actualizó el elemento exitosamente";
}
else{
        echo "Error" . $sql . mysqli_error($bd);
}
cerrarConexion($bd); 

?>