<?php

include_once '../cors.php';
include_once '../conexion.php';

$id= $_GET['id_ruta'];

$bd = obtenerConexion();
$sql = 'SELECT e.id_etiqueta, e.nombre from etiquetas e JOIN rel_rutaTag rel ON rel.id_etiqueta = e.id_etiqueta JOIN rutas ru ON ru.id_ruta = rel.id_ruta WHERE ru.id_ruta' . ' = '. $id;    
$resultado = mysqli_query($bd, $sql);

echo json_encode(mysqli_fetch_all($resultado));

cerrarConexion($bd);

?>