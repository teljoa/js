//Ejercicio 2: Almacenando Datos Primitivos

//a) Utilizando localStorage, almacena tu nombre en el navegador bajo la clave "nombre". 

localStorage.setItem("nombre", "Joaquín");

//b) Recupera el nombre almacenado en localStorage y muestra su valor en la consola.

const nombre = localStorage.getItem("nombre");
console.log("Nombre almacenado:", nombre);