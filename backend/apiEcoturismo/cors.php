<?php

$dominioPermitido = 'http://localhost:4000'; #Aquí poner el puerto en el que están levantando la app de react
header('Access-Control-Allow-Origin: ' . $dominioPermitido);
header('Access-Control-Allow-Headers: content-type');
header('Access-Control-Allow-Methods: OPTIONS, GET, PUT, POST, DELETE');

?>