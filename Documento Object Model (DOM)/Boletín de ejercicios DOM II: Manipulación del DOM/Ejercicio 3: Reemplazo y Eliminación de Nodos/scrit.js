//3.1. Utiliza document.querySelector() para obtener el primer elemento <li> dentro de una lista en tu página web de ejemplo. Almacena este nodo en una variable llamada primerElemento.
const primerElemento = document.querySelector('ul li');
//3.2. Crea un nuevo elemento <li> con el texto "Nuevo elemento de lista" y almacénalo en una variable llamada nuevoElemento.
const nuevoElemento = document.createElement('li');
nuevoElemento.textContent = 'Nuevo elemento de lista';
//3.3. Utiliza el método primerElemento.replaceWith(nuevoElemento) para reemplazar el primerElemento con el nuevoElemento dentro de la lista.
primerElemento.replaceWith(nuevoElemento);
//3.4. Utiliza el método nuevoElemento.remove() para eliminar el nuevoElemento de la página.
nuevoElemento.remove();