/*
Ejercicio 1: Acceso a Elementos del DOM
1.1. Utiliza document.getElementById() para obtener el nodo con el id "main" de tu 
página web de ejemplo. Imprime el nodo en la consola.
*/
console.log(document.getElementById("lipsum"));
/*
1.2. Usa document.getElementsByClassName() para obtener todos los elementos con la 
clase "error" en tu página web de ejemplo. Imprime la colección en la consola.
*/
console.log(document.getElementsByClassName("error"));
/*
1.3. Utiliza document.getElementsByTagName() para obtener todos los elementos <p> 
de tu página web de ejemplo. Imprime la colección en la consola.
*/
console.log(document.getElementsByTagName("p"));
/*
1.4. Emplea document.querySelector() para obtener el primer párrafo con la clase 
"error" en tu página. Imprime el nodo en la consola.
*/
console.log(document.querySelector("error"));
/*
1.5. Usa document.querySelectorAll() para obtener todos los párrafos con la clase 
"error" en tu página. Imprime la colección en la consola.
*/
console.log(document.querySelectorAll("error"));
/*
1.6. Obtén por consola, al menos de 2 formas diferentes:

El elemento con id ‘input2’
La colección de párrafos
Lo mismo pero sólo de los párrafos que hay dentro del div ‘lipsum’
El formulario (ojo, no la colección con el formulario sino sólo el formulario)
Todos los inputs
Sólo los inputs con nombre ‘sexo’
Los items de lista de la clase ‘important’ (sólo los LI)
*/

console.log(document.getElementById('input2'));
console.log(document.getElementsByTagName('p'));
console.log(document.querySelectorAll('#lipsum p'));
console.log(document.getElementsByClassName('form'));
console.log(document.querySelectorAll('input'));
console.log(document.querySelectorAll('#sexo inputs'));
console.log(document.querySelectorAll('#important li'));