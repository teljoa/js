/*
Ejercicio 3: Funciones de Primera Clase

Crea una función llamada aplica_fn que tome un número y una función como argumentos y aplique la función al número. Prueba la función con una función que devuelva 
el cuadrado del número.
*/

const aplica_fn = (numero, fn) => fn(numero);


const cuadrado = x => x ** 2;


console.log(aplica_fn(5, cuadrado)); 