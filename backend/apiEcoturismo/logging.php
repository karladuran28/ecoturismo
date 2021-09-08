<?php

include_once 'cors.php';
include_once 'conexion.php';

$usuario    = json_encode($_GET['usuario']);
$contrasena = json_encode($_GET['contrasena']);

$bd = obtenerConexion();

$sql = 'SELECT id_usuario, usuario, contrasena FROM personas WHERE usuario = '. $usuario .' AND contrasena = ' . $contrasena;

$resultado = mysqli_query($bd, $sql);
$persona = $resultado->fetch_assoc();
$num_rows = mysqli_num_rows($resultado);

$response = (object)[];

if($num_rows>0){
    $response->code = 200;
    $response->information = "User logged";
    $response->id_usuario = $persona["id_usuario"];
    $response->username = $persona["usuario"];;
}
else{
    $response->code = 404;
    $response->information = "Invalid user";
}

$resultado->free();

echo json_encode($response);

cerrarConexion($bd);   

?>