let boton = document.querySelector('#btn-form');
let name = document.querySelector('#nombre');
let email = document.querySelector('#correo');
let password = document.querySelector('#contraseña');

boton.addEventListener('click', function(e) {
    e.preventDefault();

    if (name.value.trim() == "" || name.value <0) {
        alert (`tu nombre de usuario no es correcto`);   
    }
    if (email.value.trim() == "") {
        alert (`debes ingresar un correo correcto`);
    }
    if (password.value.trim() == "") {
        alert (`tu contraseña no coincide`);
    }
    else {
        alert (`Bienvenido ${name.value}`);
    }
    return false;
})

// console.log (`bienvenido ${name}`);

// Evento click en el enlace de formulario
var enlace = document.querySelector("#enlace-form");

enlace.addEventListener('click', (e) => {
    e.preventDefault();
    alert("¡ahora no es posible crear un formulario!");
})

