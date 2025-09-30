/*
Ejercicio 5: Otros Métodos de Array

Crea dos arrays, array1 y array2, con algunos elementos.

Utiliza el método concat para concatenar los dos arrays en uno nuevo llamado concatenado.

Utiliza el método reverse para invertir el orden de los elementos en concatenado.

Utiliza el método indexOf para encontrar la posición del elemento 'Plátanos' en concatenado.

Utiliza el método lastIndexOf para encontrar la última posición del elemento 'Plátanos' en concatenado.
*/

let array1 = ["Manzanas", "Peras", "Plátanos"];
let array2 = ["Naranjas", "Plátanos", "Uvas"];

let concatenado = array1.concat(array2);
console.log("Concatenado:", concatenado);

concatenado.reverse();
console.log("Invertido:", concatenado);

let primeraPosicion = concatenado.indexOf("Plátanos");
console.log("Primera posición de 'Plátanos':", primeraPosicion);

let ultimaPosicion = concatenado.lastIndexOf("Plátanos");
console.log("Última posición de 'Plátanos':", ultimaPosicion);