let dinero = parseFloat(localStorage.getItem("dinero"));

//para mostrar el dinero actual en pantalla buscamos el elemento en HTML

document.getElementById("cartera").textContent = `Dinero ${dinero}€`;

// Aqui empezamos con las primeras decisiones del usuario

function elegir(cantidad, texto, color) {
  dinero = dinero + cantidad;

  // actualizamos el valor de localStorage

  localStorage.setItem("dinero", dinero);

  // Ahora mostramos el resultado de nuestras primeras compras

  let mensaje = document.getElementById("mensaje");
  mensaje.textContent = texto;
  mensaje.style.color = color === "green" ? "#2a7a2a" : "#d32f2f";
  // Aqui uso "?" y ":" para hacer evitar usar IF/ELSE norma
  // Traduccion: si color === green → usa #2a7a2a ( IF = "?" ) ( MODO SUPERVIVENCIA )
  // si no: usa #d32f2f ( ELSE = ":") ( TU CARTERA LLORA )

  //----------------------------------------------------------------------------------------------->

  // JS arranca la animacion que aplicamos en css
  mensaje.style.animationPlayState = "running";

  // Actualizamos el dinero en pantalla
  document.getElementById("cartera").textContent = `Dinero ${dinero}€`;

  //Uso setTimeout para que nos de tiempo a leer el mensaje antes de cambiar de pagina
  setTimeout(function () {
    window.location.href = "cafeteria.html";
  }, 2000);
}
