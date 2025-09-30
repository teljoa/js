/*
Ejercicio 5: Copia y Referencia

Dado el siguiente objeto:

const persona = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Calle Principal",
    ciudad: "Ciudad"
  }
};
Crea una copia independiente del objeto persona utilizando spread ({...}).
Modifica la edad en la copia y verifica si la edad en el objeto original ha cambiado.
Modifica la calle en la copia y verifica si la dirección en el objeto original ha cambiado.
*/

const persona = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Calle Principal",
    ciudad: "Ciudad"
  }
};

const personaCopia = JSON.parse(JSON.stringify(persona))  

personaCopia.edad = 35;

console.log("Edad original:", persona.edad);       
console.log("Edad copia:", personaCopia.edad);     

personaCopia.direccion.calle = "Calle Secundaria";

console.log("Calle original:", persona.direccion.calle); 
console.log("Calle copia:", personaCopia.direccion.calle); 