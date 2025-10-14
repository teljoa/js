/*
2.1. Utiliza document.querySelector() para obtener el primer párrafo dentro del div con id "lipsum" en tu página web de ejemplo. Imprime el nodo en la consola.
*/
const primerParrafo = document.querySelector('#lipsum p');
console.log(primerParrafo);
/*
2.2. Emplea el método nextElementSibling para obtener el siguiente hermano del párrafo obtenido en el ejercicio 2.1. Imprime el nodo en la consola.
*/
const segundoParrafo = primerParrafo.nextElementSibling;
console.log(segundoParrafo);
/*
2.3. Utiliza el método parentElement para obtener el elemento padre del párrafo obtenido en el ejercicio 2.2. Imprime el nodo en la consola.
*/
const padreDelSegundoParrafo = segundoParrafo.parentElement;
console.log(padreDelSegundoParrafo);
/*
2.4. Obtén por consola, al menos de 2 formas diferentes:
*/

//El primer párrafo dentro del div#lipsum
const primerParrafo1 = document.querySelector('#lipsum p');
console.log('2.4.1 Primer párrafo (forma 1):', primerParrafo1);

const primerParrafo2 = document.getElementById('lipsum').getElementsByTagName('p')[0];
console.log('2.4.1 Primer párrafo (forma 2):', primerParrafo2);

//El segundo párrafo de #lipsum
const segundoParrafo1 = primerParrafo1.nextElementSibling;
console.log('2.4.2 Segundo párrafo (forma 1):', segundoParrafo1);


const segundoParrafo2 = document.querySelectorAll('#lipsum p')[1];
console.log('2.4.2 Segundo párrafo (forma 2):', segundoParrafo2);

//El último item de la lista

const itemsLista = document.querySelectorAll('ul li');
console.log('2.4.3 Último item lista (forma 1):', itemsLista[itemsLista.length - 1]);

const lista = document.querySelector('ul');
console.log('2.4.3 Último item lista (forma 2):', lista.lastElementChild);

//La label de "Escoge sexo"
const labelSexo1 = document.querySelector('form label:nth-of-type(4)');
console.log('2.4.4 Label sexo (forma 1):', labelSexo1);

const labels = document.querySelectorAll('form label');
const labelSexo2 = Array.from(labels).find(label => label.textContent.includes('Escoge el sexo'));
console.log('2.4.4 Label sexo (forma 2):', labelSexo2);