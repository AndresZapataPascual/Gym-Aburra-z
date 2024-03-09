document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    var email = document.getElementById("email").value;
    var contrasena = document.getElementById("contrasena").value;

    // Objeto con los datos del formulario
    var datos = {
        email: email,
        contrasena: contrasena
    };

    // Envío de los datos al servidor utilizando AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "validar_login.php", true); // Especificar el script PHP que manejará la solicitud
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // El servidor respondió correctamente
                console.log(xhr.responseText); // Manejar la respuesta del servidor aquí
            } else {
                // Error en la solicitud
                console.error("Error en la solicitud");
            }
        }
    };

    // Convertir los datos a formato JSON y enviarlos al servidor
    xhr.send(JSON.stringify(datos));
});