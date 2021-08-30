<?php


include_once '../cors.php';
include_once '../conexion.php';

$bd = obtenerConexion();
$id= $_GET['id_publicacion'];

$sql = 'SELECT * from comentarios WHERE id_publicacion = '. $id;    
$resultado = mysqli_query($bd, $sql);

$informacion = array();
while($fila=$resultado->fetch_assoc()){
    $id_user = $fila['id_usuario'];
    $sql2 = 'SELECT * from personas WHERE id_usuario = '. $id_user;
        $res = mysqli_query($bd, $sql2);
        $r = $res->fetch_assoc();

        $fila['foto_perfil'] = $r['foto_perfil'];
        $fila['nombre'] = $r['nombre'];
        $fila['usuario'] = $r['usuario'];
        
        array_push($informacion, $fila);
}

$resultado->free();

echo json_encode($informacion);



?>