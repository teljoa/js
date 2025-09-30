/*
6. comprimirRepeticiones(texto)
Implementa un “run-length encoding” simple que convierta "aaabbc" en "a3b2c1" .
Ej.: "wwwwaaadexxxxxx" → "w4a3d1e1x6" .
Pista: recorre la cadena, lleva el carácter actual y un contador; cuando cambia, añade car
+ count .
*/

function comprimirRepeticiones(texto) {
    let result = '';
    let count = 1;

    for (let i = 1; i < texto.length; i++) {
        if (texto[i] === texto[i - 1]) {
            count++;
        } else {
            result += texto[i - 1] + count;
            count = 1;
        }
    }
    result += texto[texto.length - 1] + count;
    return result;
}

console.log(comprimirRepeticiones("wwwwaaadexxxxxx"));