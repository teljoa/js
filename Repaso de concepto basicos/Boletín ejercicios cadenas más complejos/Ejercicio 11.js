/*
11. maxRun(texto)
Devuelve un objeto (o puedes devolver una cadena con formato) con el carácter que tiene
la secuencia consecutiva más larga y la longitud de esa secuencia.
Ej.: maxRun("aaabbbbcddddd") → {char: "d", length: 5} (o "d:5" ).
Pista: similar a compresión, lleva contador de la racha actual y la mejor racha.
*/

function maxRun(texto) {
    let maxChar = '';
    let maxLen = 0;
    let currentChar = '';
    let currentLen = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === currentChar) {
            currentLen++;
        } else {
            if (currentLen > maxLen) {
                maxLen = currentLen;
                maxChar = currentChar;
            }
            currentChar = texto[i];
            currentLen = 1;
        }
    }
    if (currentLen > maxLen) {
        maxLen = currentLen;
        maxChar = currentChar;
    }

    return { char: maxChar, length: maxLen };
}

console.log(maxRun("aaabbbbcddddd"));