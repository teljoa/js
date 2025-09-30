/*
Ejercicio 4: Métodos de Programación Funcional

Dado el siguiente array de números [1, 2, 3, 4, 5, 6, 7, 8, 9], realiza las siguientes operaciones:

Utiliza filter para crear un nuevo array con los números pares.
Utiliza map para crear un nuevo array con los cuadrados de los números.
Utiliza reduce para calcular la suma de todos los números.
Utiliza every para verificar si todos los números son mayores que 0.
Utiliza some para verificar si algún número es mayor que 10.
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const pares = numeros.filter(num => num % 2 === 0);
console.log("Pares:", pares); 

const cuadrados = numeros.map(num => num ** 2);
console.log("Cuadrados:", cuadrados);

const suma = numeros.reduce((acum, num) => acum + num, 0);
console.log("Suma:", suma); 

const todosMayoresQueCero = numeros.every(num => num > 0);
console.log("Todos mayores que 0:", todosMayoresQueCero); 

const algunoMayorQueDiez = numeros.some(num => num > 10);
console.log("Alguno mayor que 10:", algunoMayorQueDiez); 