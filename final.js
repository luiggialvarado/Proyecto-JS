// recuperamos el dinero final que nos queda

let dinero = parseFloat(localStorage.getItem("dinero"));

// agrego la siguiente parte del diseño para el final

let cuerpo = document.body;
let contenido = document.getElementById("contenido");
//let emojiFinal = document.getElementById("emoji-final");
let tituloFinal = document.getElementById("titulo-final");
let textoFinal = document.getElementById("texto-final");
let dineroFinal = document.getElementById("dinero-final");
let imagenFinal = document.getElementById("imagen-final");
// muestro el dinero final
dineroFinal.textContent = `Te quedan ${dinero.toFixed(2)} €`;

// CONDICIONAL PRINCIPAL PARA EL DESENLACE FINAL DEL USUARIO

if (dinero >= 50) {
  // FINAL BUENO
  imagenFinal.src = "img/rico.png";
  cuerpo.style.backgroundColor = "#e8f5e9";
  contenido.style.backgroundColor = "#c8e6c9";
  contenido.style.border = "3px solid #2a7a2a";
  //emojiFinal.textContent = "🏆";
  tituloFinal.textContent = "¡Superviviente del mes!";
  tituloFinal.style.color = "#1b5e20";
  textoFinal.textContent =
    "Llegaste al viernes con dinero de sobra. Eres un crack de la economia doméstica. Tu madre estaria orgullosa.";
  textoFinal.style.color = "#2a7a2a";
  dineroFinal.style.color = "#1b5e20";
} else if (dinero >= 10) {
  //FINAL MEDIO
  imagenFinal.src = "img/justo.png";
  cuerpo.style.backgroundColor = "#fff8e1";
  contenido.style.backgroundColor = "#ffecb3";
  contenido.style.border = "3px solid #f57c00";
  //emojiFinal.textContent = "😅";
  tituloFinal.textContent = "Por los pelos.....";
  tituloFinal.style.color = "#e65100";
  textoFinal.textContent =
    "Llegaste al viernes con lo justo. Unos céntimos de dignidad. La semana que viene igual tienes más suerte.";
  textoFinal.style.color = "#bf360c";
  dineroFinal.style.color = "#f57c00";
} else {
  // FINAL DESASTROSO 🤯
  imagenFinal.src = "img/pobre.png";
  cuerpo.style.backgroundColor = "#ffebee";
  contenido.style.backgroundColor = "#ffcdd2";
  contenido.style.border = "3px solid #d32f2f";
  //emojiFinal.textContent = "💸";
  tituloFinal.textContent = "¡Arruinado!";
  tituloFinal.style.color = "#b71c1c";
  textoFinal.textContent =
    "Te quedaste sin blanca antes del viernes. Llamando a mamá para que te haga un bizum de emergencia.";
  textoFinal.style.color = "#c62828";

  // POR ULTIMO LE AGREGO EL TEMBLOR QUE SOLO ES PARA EL FINAL DESASTROSO
  // añado classList.add y se activa automaticamente
  dineroFinal.classList.add("temblar");
}

contenido.style.animationPlayState = "running";

//AGREGO LA PARTE FINAL PARA PODER REINICIAR EL JUEGO Y EL DINERO

function reiniciar() {
  localStorage.removeItem("dinero");
  window.location.href = "index.html";
}

// HASTA AQUI LA TORTURA............😮‍💨
