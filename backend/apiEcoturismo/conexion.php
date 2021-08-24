<?php

function obtenerConexion(){
    //conexion a la base de datos MySQL
    $servidor   = "mysql-community-server";
    $puerto     = "3306";
    $hostname   = "127.0.0.1";
    $db         = "ecoturismo";
    $usuario    = "root";
    $contrasena = "Elpepe593_asd";
    
    $link = mysqli_connect( $hostname,
                            $usuario,
                            $contrasena,
                            $db);
    
    
    //confirmar conexion
    if ( $link === false ){
        die("ERROR: No se pudo conectar a la base de datos. " . mysqli_connect_error());
    }
    
    
    return $link;
}

function cerrarConexion($bd){
    $bd->close();

}

function obtenerInfoFromTabla($nombreTabla){
    $bd = obtenerConexion();
    $sql = 'SELECT * from ' . $nombreTabla;
    $publicaciones = array();
    $resultado = mysqli_query($bd, $sql);
    while($fila=$resultado->fetch_assoc()){
        echo json_encode($fila);
    }
    $resultado->free();
    cerrarConexion($bd);    
}




?>