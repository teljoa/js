/*
8️⃣ Reto extra: Todo junto
Crea un script que:

Pida al usuario una lista de números separados por coma con prompt().

Convierta la cadena en array con split.

Convierta todos los elementos a Number.

Calcule y muestre:

La suma y media con reduce.

El máximo y mínimo con Math.max(...arr) y Math.min(...arr).

Un nuevo array con solo los pares.

Un nuevo array con todos multiplicados ×2.

Si hay al menos un número mayor que 100 (some).

Si todos son positivos (every).

Muestre todos los resultados con console.table().
*/

let entrada = prompt("Introduce una lista de números separados por coma:");

let numeros = entrada.split(",").map(num => Number(num.trim()));

let suma = numeros.reduce((acc, n) => acc + n, 0);
let media = suma / numeros.length;

let max = Math.max(...numeros);
let min = Math.min(...numeros);

let pares = numeros.filter(n => n % 2 === 0);

let multiplicados = numeros.map(n => n * 2);

let hayMayorQue100 = numeros.some(n => n > 100);

let todosPositivos = numeros.every(n => n > 0);

console.table({
  "Números": numeros,
  "Suma": suma,
  "Media": media,
  "Máximo": max,
  "Mínimo": min,
  "Pares": pares,
  "Multiplicados x2": multiplicados,
  "¿Hay > 100?": hayMayorQue100,
  "¿Todos positivos?": todosPositivos
});