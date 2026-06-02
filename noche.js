//Pagina 4 - NOCHE

// recupero el dinero
let dinero = parseFloat(localStorage.getItem("dinero"));

let carteraEl = document.getElementById("cartera");
carteraEl.textContent = `${dinero.toFixed(2)} €`;

// AGREGO EL CONDICIONAL PARA CAMBIAR EL COLOR DE LA CARTERA SEGUN EL DINERO QUE NOS QUEDA 🤪
// en el CSS lo tengo con un AVISO!!
if (dinero >= 60) {
  carteraEl.classList.add("rico");
  document.getElementById("aviso").textContent =
    "Llegas bien al jueves. puedes darte un capricho.";
} else if (dinero >= 20) {
  carteraEl.classList.add("justo");
  document.getElementById("aviso").textContent =
    "Casi casi. Una mala decición y lo fastidias.";
} else {
  carteraEl.classList.add("pobre");
  document.getElementById("aviso").textContent =
    "⚠️ Situacion critica. Quedate en casa.";
}

function elegir(cantidad, texto, color) {
  dinero = dinero + cantidad;
  localStorage.setItem("dinero", dinero);

  let mensajeEl = document.getElementById("mensaje");
  mensajeEl.textContent = texto;

  // En esta ocacion uso IF/ELSE y no TERNARIO (tengo 3 estados)
  if (color === "green") {
    mensajeEl.style.color = "#69ff69";
  } else if (color === "ganando") {
    mensajeEl.style.color = "#ffd369";
  } else {
    mensajeEl.style.color = "#ff6b6b";
  }

  mensajeEl.style.animationPlayState = "running";
  document.getElementById("cartera").textContent = `${dinero} €`;

  setTimeout(function () {
    window.location.href = "final.html";
  }, 2000);
}
//-------------------------------- Hasta aqui La Noche ---------------------------
