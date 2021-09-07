<?php

include_once 'cors.php';
include_once 'conexion.php';

$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

$bd = obtenerConexion();
$sql = `SELECT usuario, contrasena from personas where usuario= #{$usuario} and contrasena= #{$contrasena}` ;

$resultado = mysqli_query($bd, $sql);
$num_rows = mysqli_num_rows($result);



if($num_rows>0){
    $response->code = 200;
    $response->information = "User logged";
    $response->username = $usuario;
}
else{
    $response->code = 404;
    $response->information = "Invalid user";
}
$resultado->free();
cerrarConexion($bd);   
echo json_encode($reponse);
?>