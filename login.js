
function validarInicioSesion() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    // Verificar si los campos están llenos
    if (usuario.trim() === '' || contrasena.trim() === '') {
        alert("Por favor, complete todos los campos.");
        return false; // Evitar enviar el formulario si hay campos vacíos
    }

    // Verificar si el usuario ingresado es el esperado (ejemplo: 'admin')
    if (usuario !== 'andres.zapata019@pascualbravo.edu.co') {
        alert("Usuario incorrecto.");
        return false; // Evitar enviar el formulario si el usuario no es el esperado
    }

    // Verificar si la contraseña ingresada es la esperada (ejemplo: '1234')
    if (contrasena !== '1234') {
        alert("Contraseña incorrecta.");
        return false; // Evitar enviar el formulario si la contraseña no es la esperado
    }

    if (contrasena === '1234' && usuario === 'andres.zapata019@pascualbravo.edu.co') {
        window.location.href = "./comunas.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }

    // Evitar el envío del formulario
    return false;
   
} 