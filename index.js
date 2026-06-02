//----- PAGINA 1 ------

// Paso 1: guardamos nuestro dinero inicial en "localStorage"
//lo hacemos con un condicional "if" por si volvemos a cargar la pagina o le damos a atras no nos resetee el dinero

if (localStorage.getItem("dinero") === null) {
  // con getItem leemos o recuperamos un dato guardado en el localStorage
  // === null es =  a: si no hay nada guardado en "dinero" entonces ejecuta esto ↘︎
  localStorage.setItem("dinero", 100); // con setItem creamos el valor inicial y guardamos el dinero, aunque cambiemos de pagina el dinero seguira existiendo

  // SI NO HACEMOS LA PRIMERA COMPROBACION CON "IF" CADA VEZ QUE EL USUARIO VUELVE A LA PRIMERA PAGINA SE REINICIA EL DINERO Y EL JUEGO SE ROMPE
}

//Paso 2: mostrar el dinero en pantalla buscando el elemento en HTML

let dinero = localStorage.getItem("dinero");
document.getElementById("cartera").textContent = `Dinero ${dinero}€`; // con textContent cambiamos el texto visible del elemento

//Paso 3: arrancamos con la primera animacion
document.getElementById("contenido").style.animationPlayState = "running"; // con esto hacemos que la animacion empiece a correr, por defecto esta en "paused"

//Paso 4: aqui creamos la funcion para navegar entre paginas

function irA(pagina) {
  window.open(pagina, "_self"); // con esto abrimos la pagina que le pasamos por parametro, el "_self" hace que se abra en la misma pestaña
}

// --------------------- HASTA AQUI LA PAGINA 1 ----------------------
