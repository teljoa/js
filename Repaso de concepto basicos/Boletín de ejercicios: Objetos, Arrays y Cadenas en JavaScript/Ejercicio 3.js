/*
Ejercicio 3: Generador de acrónimos
Escribe una función que tome un array de objetos, donde cada objeto representa una frase, y genere un acrónimo para cada frase. El acrónimo debe 
formarse tomando la primera letra de cada palabra de la frase y convirtiéndola a mayúscula.

Ejemplo:

let phrases = [
  { phrase: "Hyper Text Markup Language" },
  { phrase: "Cascading Style Sheets" },
  { phrase: "Object Oriented Programming" }
];
Tareas:

Crea una función que genere el acrónimo para cada frase y lo añada como una nueva propiedad acronym en cada objeto.
Utiliza map() para devolver un array de objetos con los acrónimos ya generados.
Filtra las frases que contengan más de tres palabras y devuelve solo esas frases con su acrónimo.
*/

let phrases = [
  { phrase: "Hyper Text Markup Language" },
  { phrase: "Cascading Style Sheets" },
  { phrase: "Object Oriented Programming" }
];

function addAcronymToPhrases(phrasesArray) {
  return phrasesArray.map(obj => {
    const words = obj.phrase.split(/\s+/); 
    const acronym = words.map(word => word[0].toUpperCase()).join('');
    return {
      ...obj, 
      acronym 
    };
  });
}

let phrasesWithAcronyms = addAcronymToPhrases(phrases);
console.log(phrasesWithAcronyms);

let phrases3plus = phrasesWithAcronyms.filter(obj => {
  const wordCount = obj.phrase.trim().split(/\s+/).length;
  return wordCount > 3;
});

console.log(phrases3plus);