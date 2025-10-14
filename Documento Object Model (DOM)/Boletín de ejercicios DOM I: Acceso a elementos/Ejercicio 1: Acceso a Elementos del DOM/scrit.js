/*
1.1. Utiliza document.getElementById() para obtener el nodo con el id "main" de tu página web de ejemplo. Imprime el nodo en la consola.
*/
console.log(document.getElementById("main"));
/*
1.2. Usa document.getElementsByClassName() para obtener todos los elementos con la clase "error" en tu página web de ejemplo. Imprime la colección en la consola.
*/
console.log(document.getElementsByClassName("error"));
/*
1.3. Utiliza document.getElementsByTagName() para obtener todos los elementos <p> de tu página web de ejemplo. Imprime la colección en la consola.
*/
console.log(document.getElementsByTagName("p"));
/*
1.4. Emplea document.querySelector() para obtener el primer párrafo con la clase "error" en tu página. Imprime el nodo en la consola.
*/
console.log(document.querySelector("p.error"));
/*
1.5. Usa document.querySelectorAll() para obtener todos los párrafos con la clase "error" en tu página. Imprime la colección en la consola.
*/
console.log(document.querySelectorAll("p.error"));
/*
1.6. Obtén por consola, al menos de 2 formas diferentes:
*/

// a) El elemento con id ‘input2’
console.log(document.getElementById("input2"));
console.log(document.querySelector("#input2"));

// b) La colección de todos los párrafos
console.log(document.getElementsByTagName("p"));
console.log(document.querySelectorAll("p"));

// c) Sólo los párrafos dentro del div con id ‘lipsum’
console.log(document.querySelectorAll("#lipsum p"));
console.log(document.getElementById("lipsum").getElementsByTagName("p"));

// d) El formulario (solo el formulario, no la colección)
console.log(document.getElementById("myForm"));
console.log(document.querySelector("form#myForm"));

// e) Todos los inputs
console.log(document.getElementsByTagName("input"));
console.log(document.querySelectorAll("input"));

// f) Sólo los inputs con nombre ‘sexo’
console.log(document.querySelectorAll("input[name='sexo']"));
console.log(document.getElementsByName("sexo"));

// g) Los items de lista (li) con la clase ‘important’ (solo los LI)
console.log(document.querySelectorAll("li.important"));
console.log(document.getElementsByClassName("important")); // Esto incluye también otros elementos con esa clase
// Para filtrar sólo los LI de la colección:
const onlyLiImportant = Array.from(document.getElementsByClassName("important")).filter(el => el.tagName === "LI");
console.log(onlyLiImportant);