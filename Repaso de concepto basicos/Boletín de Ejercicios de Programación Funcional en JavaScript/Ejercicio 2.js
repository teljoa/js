/*
Ejercicio 2: Parámetros y Valores por Defecto

Crea una función llamada potencia que calcule la potencia de un número dado a un exponente dado. La función debe tener un valor por defecto de exponente igual a 2.
*/

const potencia = (base, exponente = 2) => base ** exponente;

console.log(potencia(4,6));
