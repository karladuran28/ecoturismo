<?php

include_once 'cors.php';
include_once 'conexion.php';
$foto = ["url"=>"https://i.imgur.com/iP8MxbU.jpg", "id_lugar"=> 18];


$bd = obtenerConexion();
$sql = 'INSERT INTO fotos (url, id_lugar) 
            VALUES ("' . $foto["url"] . '", 
            "' . $foto["id_lugar"] . '")' ;
    
if( mysqli_query($bd, $sql) ){
        echo "Se insertó el elemento exitosamente";
}
else{
    echo "Error" . $sql . mysqli_error($bd);
}

cerrarConexion($bd);  

?>