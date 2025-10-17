/*
Descripción: Añade una interfaz gráfica al generador de acrónimos. El usuario podrá introducir frases en un formulario y el acrónimo se generará y mostrará automáticamente en pantalla.

Tareas:

Formulario de entrada: Crea un formulario donde el usuario pueda introducir una frase.
Generar acrónimos dinámicamente: Al enviar el formulario, genera el acrónimo de la frase ingresada y muéstralo debajo del formulario.
Filtrar frases largas: Si la frase tiene más de tres palabras, aplícale una clase CSS diferente para destacarla.
Botón de reset: Añade un botón que permita borrar la lista de acrónimos generados y reiniciar el formulario.
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
    return { ...obj, acronym };
  });
}

function renderList() {
  const list = document.getElementById("acronymList");
  list.innerHTML = "";

  phrases.forEach(obj => {
    const li = document.createElement("li");
    const wordCount = obj.phrase.trim().split(/\s+/).length;

    if (wordCount > 3) {
      li.classList.add("long-phrase");
    }

    li.innerHTML = `
      <p><strong>Frase:</strong> ${obj.phrase}</p>
      <p><strong>Acrónimo:</strong> ${obj.acronym}</p>
    `;
    list.appendChild(li);
  });
}

let phrasesWithAcronyms = addAcronymToPhrases(phrases);
phrases = phrasesWithAcronyms;
renderList();

document.getElementById("acronymForm").addEventListener("submit", e => {
  e.preventDefault();

  const input = document.getElementById("phraseInput");
  const phraseText = input.value.trim();

  if (phraseText) {
    const newPhraseObj = addAcronymToPhrases([{ phrase: phraseText }])[0];
    phrases.push(newPhraseObj);
    renderList();
    input.value = "";
  }
});

document.getElementById("resetBtn").addEventListener("click", () => {
  phrases = [];
  document.getElementById("acronymList").innerHTML = "";
  document.getElementById("phraseInput").value = "";
});