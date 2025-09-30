/*
5. sustituirVocalesPorAsterisco(texto)
Devuelve la misma cadena pero con todas las vocales sustituidas por * .
Ej.: "Carrera" → "C*rr*r*" .
Pista: puedes usar replace con regex global o un bucle carácter a carácter.
*/

function sustituirVocalesPorAsterisco(texto) {
    return texto.replace(/[aeiouAEIOU]/g, '*');
}

console.log(sustituirVocalesPorAsterisco("Carrera"));