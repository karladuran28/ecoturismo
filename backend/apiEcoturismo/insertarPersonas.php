<?php

include_once 'cors.php';
include_once 'conexion.php';

$usuario = $_POST['usuario'];
$nombre = $_POST['nombre']; 
$contrasena = $_POST['contrasena'];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$foto_perfil = $_POST['foto_perfil'];


$bd = obtenerConexion();
$sql = 'INSERT INTO personas (usuario,contrasena,nombre,apellido,correo,foto_perfil) 
            VALUES ("' . $usuario . '", 
            "' . $contrasena . '",
            "' . $nombre . '",
            "' . $apellido . '",
            "' . $correo . '", 
            "' . $foto_perfil . '") ';
    
if( mysqli_query($bd, $sql) ){
        echo "Se insertó el elemento exitosamente";
}
else{
        echo "Error" . $sql . mysqli_error($bd);
}

cerrarConexion($bd);  

?>