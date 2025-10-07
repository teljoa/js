/*
Ejercicio 2: Acceso a Nodos Relacionados
2.1. Utiliza document.querySelector() para obtener el primer párrafo dentro del 
div con id "lipsum" en tu página web de ejemplo. Imprime el nodo en la consola.
*/
const primerParrafo = document.querySelector("#lipsum p");
console.log("2.1 Primer párrafo dentro de #lipsum:", primerParrafo);
/*
2.2. Emplea el método nextElementSibling para obtener el siguiente hermano del 
párrafo obtenido en el ejercicio 2.1. Imprime el nodo en la consola.
*/
const segundoParrafo = primerParrafo.nextElementSibling;
console.log("2.2 Siguiente hermano del primer párrafo:", segundoParrafo);
/*
2.3. Utiliza el método parentElement para obtener el elemento padre del párrafo 
obtenido en el ejercicio 2.2. Imprime el nodo en la consola.
*/
const padreDelSegundoParrafo = segundoParrafo.parentElement;
console.log("2.3 Padre del segundo párrafo:", padreDelSegundoParrafo);
/*
2.4. Obtén por consola, al menos de 2 formas diferentes:

El primér párrafo que hay dentro del div ‘lipsum’
El segundo párrafo de ‘lipsum’
El último item de la lista
La label de ‘Escoge sexo’
*/

const parrafo1_forma1 = document.querySelector("#lipsum p");
console.log("2.4.a - Forma 1:", parrafo1_forma1);

const parrafo2_forma2 = document.querySelectorAll("#lipsum p")[1];
console.log("2.4.b - Forma 2:", parrafo2_forma2);

const ultimoItem2 = document.querySelector("ul").lastElementChild;
console.log("2.4.c - Forma 2 (último li):", ultimoItem2);

const labelSexo = document.querySelectorAll("form label")[3];
console.log("2.4.d - Forma 2:", labelSexo);