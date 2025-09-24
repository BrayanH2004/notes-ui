import { Usuarios } from "./src/config/database.js";  
import { alertaRedireccion } from "./src/utils/alertas.js";
const btnLogin = document.querySelector('#login');
btnLogin.addEventListener('click', () => {
    let correo = document.querySelector('#email').value;
    let contraseña = document.querySelector('#password').value;
    let usuarioAuth = Usuarios.find(usuario => correo === usuario.correo && contraseña === usuario.contraseña);
    if (usuarioAuth) {
        alert(`Bienvenido al sistema`);
    }else{
        alertaRedireccion();
    }
});
