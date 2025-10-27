//Ejercicio 1: Eventos Básicos

/*
1.1. Crea una página HTML con un botón. Agrega un escuchador de eventos para que cuando se haga clic en el botón, se muestre un mensaje en la consola del 
navegador.
*/

const btnMensaje = document.getElementById("btnMensaje");
btnMensaje.addEventListener("click", () => {
  console.log("¡Has hecho clic en el botón!");
});

/*
1.2. Agrega otro elemento HTML (por ejemplo, un enlace) en la página y agrega un escuchador de eventos para que cuando se pase el mouse sobre el elemento, 
el color de fondo cambie.
*/

const linkHover = document.getElementById("linkHover");
linkHover.addEventListener("mouseover", () => {
  linkHover.style.backgroundColor = "#f39c12";
});
linkHover.addEventListener("mouseout", () => {
  linkHover.style.backgroundColor = "";
});

/*
1.3. Agrega un escuchador de eventos al elemento document.body para que cuando se mueva el ratón en cualquier punto de la ventana del navegador, 
muestre en algún elemento (puedes agregar un <div> o <p> al HTML) la posición del puntero respecto al navegador y respecto a la página.
*/

const posicionMouse = document.getElementById("posicionMouse");
document.body.addEventListener("mousemove", (e) => {
  posicionMouse.textContent = `Posición del mouse - Ventana: (${e.clientX}, ${e.clientY}) | Página: (${e.pageX}, ${e.pageY})`;
});

/*
Ejercicio 2: Escuchar eventos de teclado

2.1 Agrega un escuchador de eventos al elemento document.body para que cuando se presione cualquier tecla, muestre un mensaje de alerta con el nombre de la 
tecla pulsada y su código.

2.2 Prueba el escuchador de eventos con diferentes teclas para verificar que muestra correctamente el nombre y el código de la tecla pulsada.
*/

document.body.addEventListener("keydown", (e) => {
  alert(`Presionaste la tecla: ${e.key} (Código: ${e.code})`);
});

/*
Ejercicio 3: Captura y Propagación


3.1. Crea una lista desordenada (<ul>) con varios elementos de lista (<li>) dentro. Agrega un escuchador de eventos al elemento <ul> para que cuando se haga 
clic en cualquier elemento de la lista, se muestre un mensaje en la consola indicando el texto del elemento clickeado.

3.2. Modifica el ejercicio anterior para que el mensaje en la consola muestre el nivel de jerarquía en el DOM del elemento clickeado. 
Por ejemplo, si se hace clic en un <li>, el mensaje podría decir "Clickeaste en un elemento de nivel 2".
*/

const lista = document.getElementById("lista");
lista.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(`Clickeaste en el elemento: ${e.target.textContent}`);
    console.log("Clickeaste en un elemento de nivel 3 en el DOM");
  }
});

/*
Ejercicio 4: Eventos de formulario

4.1. Crea un formulario HTML con campos de entrada para el nombre y el correo electrónico. Agrega un botón "Enviar" al formulario. 
Cuando se haga clic en el botón, valida que los campos de entrada no estén vacíos y muestra un mensaje de éxito o error en la página en función de la validación.

4.2. Agrega una función que dispare un evento personalizado "formularioEnviado" cuando se envíe el formulario con éxito. Escucha este evento y muestra un 
mensaje personalizado en la consola cuando se dispare.
*/

const formulario = document.getElementById("formulario");
const mensajeForm = document.getElementById("mensajeForm");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();

  if (nombre === "" || correo === "") {
    mensajeForm.textContent = "Error: Todos los campos son obligatorios.";
    mensajeForm.className = "error";
  } else {
    mensajeForm.textContent = "Formulario enviado correctamente.";
    mensajeForm.className = "exito";

    const eventoFormulario = new CustomEvent("formularioEnviado", {
      detail: { nombre, correo }
    });
    formulario.dispatchEvent(eventoFormulario);
  }
});

formulario.addEventListener("formularioEnviado", (e) => {
  console.log(`Evento personalizado "formularioEnviado" disparado para: ${e.detail.nombre}`);
});

//Ejercicio 5: Eventos personalizados


//5.1. Crea un nuevo evento personalizado llamado "miEvento" utilizando new CustomEvent().

const btnEventoPersonalizado = document.getElementById("btnEventoPersonalizado");

//5.2. Agrega un escuchador de eventos a un elemento HTML (puedes usar un botón) para escuchar el evento "miEvento" y mostrar un mensaje de alerta cuando ocurra.

btnEventoPersonalizado.addEventListener("miEvento", () => {
  alert("¡Evento personalizado 'miEvento' detectado!");
});

//5.3. Dispara manualmente el evento "miEvento" en el elemento y verifica que se muestra el mensaje de alerta.

btnEventoPersonalizado.addEventListener("click", () => {
  const miEvento = new CustomEvent("miEvento");
  btnEventoPersonalizado.dispatchEvent(miEvento);
});