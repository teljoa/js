/*
7. primerasMayusculas(texto)
Devuelve la misma frase pero con la primera letra de cada palabra en mayúscula. No
usar split .
Ej.: "hola mundo desde js" → "Hola Mundo Desde Js" .
Pista: detecta el inicio de palabra cuando el carácter anterior es espacio (o inicio de
cadena).
*/

function primerasMayusculas(texto) {
    let result = '';
    let inWord = false;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== ' ') {
            if (!inWord) {
                result += texto[i].toUpperCase();
                inWord = true;
            } else {
                result += texto[i].toLowerCase();
            }
        } else {
            result += texto[i];
            inWord = false;
        }
    }

    return result;
}


console.log(primerasMayusculas("hola mundo desde js"));