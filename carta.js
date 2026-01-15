const sobre = document.getElementById("sobre");
const abrir = document.getElementById("abrir");
const verCartas = document.getElementById("verCartas");

abrir.addEventListener("click", () => {
  sobre.classList.add("abierto");
  abrir.style.display = "none";
});

verCartas.addEventListener("click", () => {
  window.location.href = "cartas.html";
});
