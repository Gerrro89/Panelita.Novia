const contador = document.getElementById("contador");
const btnDescargar = document.getElementById("btnDescargar");
const btnAnimacion = document.getElementById("btnAnimacion");

// 📅 FECHA REAL Y FIJA
// 25 de enero de 2026 a las 00:00 (hora local del dispositivo)
const fechaObjetivo = new Date(2026, 0, 25, 0, 0, 0);

const intervalo = setInterval(() => {
  const ahora = new Date();
  const diferencia = fechaObjetivo - ahora;

  // ⛔ Cuando llegue la fecha
  if (diferencia <= 0) {
    clearInterval(intervalo);
    contador.textContent = "💖 Ya está lista";

    btnDescargar.classList.remove("oculto");
    btnAnimacion.classList.remove("oculto");
    return;
  }

  // ⏳ Cálculo real
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  contador.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}, 1000);
