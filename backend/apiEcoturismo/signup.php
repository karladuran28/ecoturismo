<?php

require 'cors.php';
require 'conexion.php';
require 'validarRegistro.php';

/* manejo de errores */
$errores = ['nombreErr' => '', 'apellidoErr' => '', 'correoErr' => '', 'usuarioErr' => '', 'contrasenaErr' => ''];

/* data usuario */
$nombre = $apellido = $correo = $usuario = $contrasena = $foto_perfil = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $_POST = json_decode(file_get_contents('php://input'), true);

    if ( !validarNombre($_POST["nombre"]) ) {
        $errores['nombreErr'] = 'Nombre no válido';
    } else {
        $nombre = $_POST['nombre'];
    }

    if ( !validarNombre($_POST['apellido']) ) {
        $errores['apellidoErr'] = 'Apellido no válido';
    } else {
        $apellido = $_POST['apellido'];
    }

    if ( !validarCorreo($_POST['correo']) ) {
        $errores['correoErr'] = 'Correo no válido';
    } else {
        $correo = $_POST['correo'];
    }

    if ( !validarUsuario($_POST['usuario']) ) {
        $errores['usuarioErr'] = 'Usuario no válido';
    } else {
        $usuario = $_POST['usuario'];
    }

    if ( !validarContrasena($_POST['contrasena']) ) {
        $errores['contrasenaErr'] = 'Contraseña no válida';
    } else {
        $contrasena = $_POST['contrasena'];
    }

    $foto_perfil    = $_POST['foto_perfil'];

    $esValido = true;

    foreach ( $errores as $error => $valor) {
        if ( $valor != '') {
            $esValido = false;
        }
    }

    if ( $esValido ) {

        $bd = obtenerConexion();

        $sql = 'INSERT INTO personas (usuario,contrasena,nombre,apellido,correo,foto_perfil) 
            VALUES ("' . $usuario . '", 
            "' . $contrasena . '",
            "' . $nombre . '",
            "' . $apellido . '",
            "' . $correo . '", 
            "' . $foto_perfil . '") ';
    
        if( mysqli_query($bd, $sql) ){
            echo json_encode("ok");
        }
        else{
            echo "Error" . $sql . mysqli_error($bd);
        }
        cerrarConexion($bd); 
        
    } else {
        echo json_encode($errores);
    }

}

?>