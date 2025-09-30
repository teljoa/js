/*
Ejercicio 1: Funciones y Arrow Functions

Crea una función llamada saludar que tome un nombre como argumento y muestre un mensaje de saludo en la consola. Luego, reescribe la misma función utilizando una 
arrow function.
*/

function saludar(nombre) {
  return "¡Hola, " + nombre + "!";
}

console.log(saludar('joaquin'));


const saludararrow = (nombre) => {
 return `¡Hola, ${nombre}!`;
};

console.log(saludararrow('joaquin'));