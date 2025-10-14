//5.1. Utiliza document.querySelector() para obtener un elemento de tu página web y asigna una clase "destacado" a este elemento utilizando la propiedad elemento.className.
const elemento = document.querySelector('#lipsum');
elemento.className = 'destacado';
//5.2. Utiliza la propiedad classList para agregar la clase "nuevo-estilo" al elemento obtenido en el ejercicio 5.1.
elemento.classList.add('nuevo-estilo');
//5.3. Emplea la propiedad classList para eliminar la clase "destacado" del elemento obtenido en el ejercicio 5.1.
elemento.classList.remove('destacado');
//5.4. Comprueba si el elemento obtenido en el ejercicio 5.1 tiene la clase "nuevo-estilo" utilizando el método classList.contains().
const tieneNuevoEstilo = elemento.classList.contains('nuevo-estilo');
console.log('¿Tiene la clase "nuevo-estilo"?', tieneNuevoEstilo);