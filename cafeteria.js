// Pagina 3 - CAFETERIA

//let dinero = parseInt(localStorage.getItem('dinero')); → lo intente pero me corta los decimales

// recupero el dinero
let dinero = parseFloat(localStorage.getItem("dinero"));

let carteraEl = document.getElementById("cartera");
carteraEl.textContent = `${dinero.toFixed(2)} €`;

// AGREGO EL CONDICIONAL PARA CAMBIAR EL COLOR DE LA CARTERA SEGUN EL DINERO QUE NOS QUEDA 🤪
// en el CSS lo tengo con un AVISO!!
if (dinero >= 60) {
  carteraEl.classList.add("rico");
  document.getElementById("aviso").textContent =
    "Vas bien. Puedes permitirte algo rico.";
} else if (dinero >= 20) {
  carteraEl.classList.add("justo");
  document.getElementById("aviso").textContent =
    "Cuidado. No te queda tanto como crees.";
} else {
  carteraEl.classList.add("pobre");
  document.getElementById("aviso").textContent =
    "⚠️ Modo supervivencia. Piensatelo dos veces.";
}

function elegir(cantidad, texto, color) {
  dinero = dinero + cantidad;
  localStorage.setItem("dinero", dinero);

  let mensajeEl = document.getElementById("mensaje");
  mensajeEl.textContent = texto;
  mensajeEl.style.color = color === "green" ? "#2a7a2a" : "#d32f2f";
  mensajeEl.style.animationPlayState = "running";

  document.getElementById("cartera").textContent = `${dinero} €`;

  setTimeout(function () {
    window.location.href = "noche.html";
  }, 2000);
}
