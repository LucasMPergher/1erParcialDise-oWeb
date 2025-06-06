<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = htmlspecialchars($_POST["email"]);
    $asunto = htmlspecialchars($_POST["asunto"]);
    $mensaje = htmlspecialchars($_POST["mensaje"]);

    echo "¡Gracias $nombre! Hemos recibido tu mensaje sobre '$asunto'. Te responderemos a la brevedad.";
} else {
    echo "Error en el envío del formulario.";
}
