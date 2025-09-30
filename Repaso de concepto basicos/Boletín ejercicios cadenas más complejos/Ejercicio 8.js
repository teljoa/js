/*
8. contadorDePalabras(texto)
Devuelve cuántas palabras hay en la cadena (palabras separadas por uno o más
espacios). No usar split .
Ej.: " esto es una prueba " → 4 .
Pista: recorre la cadena y cuenta transiciones de espacio→no-espacio.
*/

function contadorDePalabras(texto) {
    let count = 0;
    let inWord = false;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== ' ' && !inWord) {
            inWord = true;
            count++;
        } else if (texto[i] === ' ') {
            inWord = false;
        }
    }

    return count;
}

console.log(contadorDePalabras(" esto es una prueba "));