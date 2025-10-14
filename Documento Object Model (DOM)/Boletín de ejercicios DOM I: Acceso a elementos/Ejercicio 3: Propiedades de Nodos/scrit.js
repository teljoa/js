/*
3.1. Utiliza document.querySelector() para obtener el primer párrafo dentro del div con id "lipsum" en tu página web de ejemplo. Almacena este nodo en una variable.
*/
const primerParrafo = document.querySelector("#lipsum p");
/*
3.2. Utiliza la propiedad innerHTML para obtener el contenido HTML completo del párrafo obtenido en el ejercicio 3.1. Imprime el contenido en la consola.
*/
console.log("innerHTML:", primerParrafo.innerHTML);
/*
3.3. Emplea la propiedad textContent para obtener el contenido de texto del párrafo obtenido en el ejercicio 3.1. Imprime el contenido en la consola.
*/
console.log("textContent:", primerParrafo.textContent);
/*
3.4. Utiliza document.querySelector() para obtener el primer input de tipo "text" en tu página web de ejemplo. Almacena este nodo en una variable.
*/
const primerInputTexto = document.querySelector('input[type="text"]');
/*
3.5. Usa la propiedad value para obtener el valor del input obtenido en el ejercicio
*/
console.log("Valor del primer input:", primerInputTexto.value);

//3.6. Imprime el valor en la consola, al menos de 2 formas:

//El innerHTML de la etiqueta de ‘Escoge sexo’
const etiquetaSexo = document.querySelector('form label:nth-of-type(4)');
console.log(etiquetaSexo.innerHTML);
//El textContent de esa etiqueta
console.log(etiquetaSexo.textContent);
//El valor del primer input de sexo
const primerInputSexo = document.querySelector('input[name="sexo"]');
console.log(primerInputSexo.value);
//El valor del sexo que esté seleccionado (difícil, búscalo por Internet)
const sexoSeleccionado = document.querySelector('input[name="sexo"]:checked');
if (sexoSeleccionado) {
  console.log("Sexo seleccionado:", sexoSeleccionado.value);
} else {
  console.log("No hay ningún sexo seleccionado.");
}