import { Usuarios } from "./src/config/database.js";  
import { alertaRedireccion, alertaGeneral } from "./src/utils/alertas.js";
import { guardarLocalStorage } from "./src/config/local-storage.js";
import { generarToken } from "./src/utils/generar-codigos.js";

let token = generarToken();
console.log(token);

const btnLogin = document.querySelector('#login');
btnLogin.addEventListener('click', () => {
    let correo = document.querySelector('#email').value;
    let contraseña = document.querySelector('#password').value;
    let usuarioAuth = Usuarios.find(usuario => correo === usuario.correo && contraseña === usuario.contraseña);
    if (usuarioAuth) {
        guardarLocalStorage("usuario",usuarioAuth)
       return alertaRedireccion("Bienvenido al sistema","success", "/src/pages/html/home.html");

    }
        return alertaGeneral("Error de autenticación","Correo o contraseña incorrecta","error" );

});

