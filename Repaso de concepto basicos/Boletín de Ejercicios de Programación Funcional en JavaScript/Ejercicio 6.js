/*
Ejercicio 6: Desestructuración de Arrays y Objetos

Dado el siguiente array [1, 2, 3, 4, 5]:

Utiliza la desestructuración para asignar los valores a las variables a, b, c, d, y e.
Realiza la misma tarea para el objeto { nombre: "Alice", edad: 25 }.
*/

const numeros6 = [1, 2, 3, 4, 5];

const [a, b, c, d, e] = numeros;

console.log(a);
console.log(b); 
console.log(c);
console.log(d);
console.log(e);

const persona6 = {
  nombre: "Alice",
  edad: 25
};

const { nombre, edad } = persona;

console.log(nombre);
console.log(edad);