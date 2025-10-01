export function alertaRedireccion(mensaje, icono, redireccion){
    let timerInterval;
Swal.fire({
  title: mensaje,
  html: "seras redireccionado <b></b> millisegundos.",
  timer: 2000,
  timerProgressBar: true,
  icon: icono,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
    window.location.href = redireccion;
  }
})
}
export function alertaGeneral(titulo,mensaje,icono){
    Swal.fire({
  icon: icono,
  title: titulo,
  text: mensaje,
} );
}