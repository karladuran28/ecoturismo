<?php

include_once 'cors.php';
include_once 'conexion.php';

$usuario = $_POST['usuario'];
$nombre = $_POST['nombre']; 
$contrasena = $_POST['contrasena'];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$foto_perfil = $_POST['foto_perfil'];
$id_persona = $_POST['id_persona'];


$bd = obtenerConexion();

$sql =  'UPDATE personas
            SET usuario= "' . $usuario . '", 
           contrasena = "' . $contrasena . '",
           nombre = "' . $nombre . '",
           apellido =  "' . $apellido . '",
           correo =  "' . $correo . '", 
           foto_perfil = "' . $foto_perfil . '") 
            WHERE id_persona = "' . $id_persona.'" ';
    
if( mysqli_query($bd, $sql) ){
        echo "Se actualizó el elemento exitosamente";
}
else{
        echo "Error" . $sql . mysqli_error($bd);
}

cerrarConexion($bd);  

?>