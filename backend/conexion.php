<?php

//conexion a la base de datos MySQL
$servidor   = "xampp-mysql";
$puerto     = "3306";
$hostname   = "localhost";
$db         = "ecoturismo";
$usuario    = "root";
$contrasena = "";

$link = mysqli_connect( $hostname,
                        $usuario,
                        $contrasena,
                        $db);


//confirmar conexion
if ( $link === false ){
    die("ERROR: No se pudo conectar a la base de datos. " . mysqli_connect_error());
}

echo "Conexión exitosa a la base de datos. Host: " . mysqli_get_host_info($link);

?>