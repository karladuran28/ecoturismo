<?php

include_once 'cors.php';
include_once 'conexion.php';


$bd = obtenerConexion();
$comentario = ["contenido"=>"HOLA2", "id_usuario"=>1, "id_publicacion"=> 2];

$sql = 'INSERT INTO comentarios (contenido,id_usuario,id_publicacion) 
        VALUES ("' . $comentario["contenido"] . '", 
        "' . $comentario["id_usuario"] . '",
        ' . $comentario["id_publicacion"] . ')';

if( mysqli_query($bd, $sql) ){
    echo "Se insertó el elemento exitosamente";
}
else{
    echo "Error" . $sql . mysqli_error($bd);
}
cerrarConexion($bd);  

?>