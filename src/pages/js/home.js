import { consultarLocalStorage,limpiarLocalStorage } from "../../config/local-storage.js";
import { alertaRedireccion } from "../../utils/alertas.js";
let usuario=consultarLocalStorage("usuario");
let inicialesUsuario =usuario.nombre.split(" ").map((item)=>item[0]).join("");
document.querySelector("#inicialesUsuario").textContent=inicialesUsuario;

let btnCerrarSesion=document.querySelector("#btnCerrarSesion");
btnCerrarSesion.addEventListener("click",()=>{
    limpiarLocalStorage("usuario");
    alertaRedireccion("Sesion finalizada","info","/index.html");
});