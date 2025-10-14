//1.1. Utiliza document.createElement('etiqueta') para crear un nuevo elemento HTML <div>. Asigna este elemento a una variable llamada nuevoDiv.
const nuevoDiv = document.createElement('div');
//1.2. Usa document.createTextNode('texto') para crear un nuevo nodo de texto con el contenido "Nuevo elemento de lista". Asigna este nodo a una variable llamada textoNuevo.
const textoNuevo = document.createTextNode('Nuevo elemento de lista');
//1.3. Utiliza nuevoDiv.appendChild(nuevoNodo) para agregar textoNuevo como hijo del nuevoDiv. Luego, agrega nuevoDiv como último hijo del elemento con el id "lipsum" en tu página web de ejemplo.
nuevoDiv.appendChild(textoNuevo);

const lipsum = document.getElementById('lipsum');
lipsum.appendChild(nuevoDiv);
//1.4. Añade a la página:

//Un nuevo párrafo al final del DIV ‘lipsum’ con el texto “Nuevo párrafo añadido por javascript” (fíjate que una palabra estça en negrita)
const nuevoParrafo = document.createElement('p');
nuevoParrafo.innerHTML = 'Nuevo párrafo añadido por <strong>javascript</strong>';
lipsum.appendChild(nuevoParrafo);
//Un nuevo elemento al formulario tras el ‘Dato 1’ con la etiqueta ‘Dato 1 bis’ y el INPUT con id ‘input1bis’ que al cargar la página tendrá escrito “Hola”

const nuevoParrafo = document.createElement('p');
nuevoParrafo.innerHTML = 'Nuevo párrafo añadido por <strong>javascript</strong>';
lipsum.appendChild(nuevoParrafo);

const input1 = document.getElementById('input1');

const nuevoLabel = document.createElement('label');
nuevoLabel.setAttribute('for', 'input1bis');

const input1bis = document.createElement('input');
input1bis.setAttribute('type', 'text');
input1bis.setAttribute('id', 'input1bis');
input1bis.setAttribute('name', 'input1bis');
input1bis.setAttribute('value', 'Hola');
input1bis.setAttribute('size', '20');

nuevoLabel.textContent = 'input1bis ';
nuevoLabel.appendChild(input1bis);
nuevoLabel.appendChild(document.createElement('br'));

const form = document.getElementById('myForm');
const labels = form.getElementsByTagName('label');

if (labels.length > 0) {
  const label1 = labels[0];
  label1.insertAdjacentElement('afterend', nuevoLabel);
}