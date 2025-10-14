//4.1. Utiliza document.querySelector() para obtener un elemento de tu página web que tenga un atributo id. Almacena este elemento en una variable.
const elemento = document.querySelector('#lipsum');
//4.2. Usa el método elemento.setAttribute('nombreAtributo', 'valor') para agregar un atributo "data-nuevo" con el valor "123" al elemento obtenido en el ejercicio 4.1.
elemento.setAttribute('data-nuevo', '123');
//4.3. Utiliza el método elemento.removeAttribute('nombreAtributo') para eliminar el atributo "data-nuevo" del elemento.
elemento.removeAttribute('data-nuevo');
//4.4. Cambia el color de fondo de un elemento de tu página web utilizando la propiedad style.backgroundColor. Asegúrate de que el cambio de estilo se realice mediante JavaScript.
elemento.style.backgroundColor = 'lightblue';