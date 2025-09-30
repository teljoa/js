/*
RÁPIDOS — para calentar

1. cuentaVocales(texto)
Devuelve el número de vocales (a, e, i, o, u) en la cadena (ignorar mayúsc/minúsc).
Ejemplo: cuentaVocales("Universidad") → 5 .
Pista: normaliza con .toLowerCase() y recorre con un for .
*/

let vocal=['a','e','i','o','u'];

function cuentaVocales(tex){
    let nunvol=0;

    for (let i =0; i< tex.length; i++){
        for(let j=0;j<vocal.length; j++){
            if(tex.charAt(i).toLowerCase()== vocal[j]){
                nunvol++;
            }
        }
    }
    return nunvol;
}

console.log(cuentaVocales("hola"));

/*
2. invertirCadena(texto)
Devuelve la cadena invertida.
Ejemplo: invertirCadena("hola") → "aloh" .
Pista: recorre la cadena desde el final construyendo una nueva.
*/

function invertirCadena(tex){
    let lewtex='';

    for(let i=tex.length;i>=0;i--){
        lewtex+=tex.charAt(i);
    }
    return lewtex;
}
console.log(invertirCadena("hola"));

/*
3. esPalindromo(texto)
Devuelve true si la cadena es palíndromo ignorando espacios, signos y mayúsculas,
false si no.
Ejemplo: esPalindromo("Dábale arroz a la zorra el abad") → true .
Pista: usa .replace() con una expresión regular para eliminar todo menos letras/dígitos,
luego compara con la invertida.
*/

function esPalindromo(tex){
    let texsinespa=tex.replaceAll(" ","").toLowerCase();
    let texinvert= invertirCadena(texsinespa).toLocaleLowerCase();
    
    return texinvert===texsinespa;
}

console.log(esPalindromo("Dabale arroz a la zorra el abad"));

/*
INTERMEDIOS — algo más de lógica de cadenas
4. rotarDerecha(texto, n)
Rota la cadena n posiciones hacia la derecha (si n > longitud, usa módulo).
Ej.: rotarDerecha("abcdef", 2) → "efabcd" .
Pista: usa substring dos veces y concatena.
*/

function rotarDerecha(texto, n) {
    n = n % texto.length;
    return texto.substring(texto.length - n) + texto.substring(0, texto.length - n);
}

console.log(rotarDerecha("abcdef", 2));

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

/*
DESAFIANTES — buen reto sin arrays
9. codificarCesar(texto, desplazamiento)
Implementa un cifrado César: desplaza cada letra n posiciones (preservando
mayúsculas/minúsculas). No cambies otros caracteres.
Ej.: codificarCesar("Abc z!", 2) → "Cde b!" .
Pista: usa códigos charCodeAt y trata separadamente mayúsculas y minúsculas; aplica
módulo para envolver el alfabeto.
*/

function codificarCesar(texto, desplazamiento) {
    return texto.split('').map(caracter => {
        let codigo = caracter.charCodeAt(0);

        if (codigo >= 65 && codigo <= 90) {
            return String.fromCharCode(((codigo - 65 + desplazamiento) % 26 + 26) % 26 + 65);
        }
        else if (codigo >= 97 && codigo <= 122) {
            return String.fromCharCode(((codigo - 97 + desplazamiento) % 26 + 26) % 26 + 97);
        }

        return caracter;
    }).join('');
}

console.log(codificarCesar("Abc z!", 2));

/*
10. intercalar(texto1, texto2)
Devuelve una cadena intercalando caracteres de texto1 y texto2 . Si una se acaba,
añade el resto de la otra. Sin arrays.
Ej.: intercalar("ace","bdfgh") → "abcdefg h" (ace + bdfgh → "ab c d e f g h" ;
adapta ejemplo claro en clase).
Pista: usa un bucle con índice i que recorra hasta la mayor longitud y charAt(i) .
*/

function intercalar(texto1, texto2) {
    let resultado = '';
    let i = 0;

    while (i < texto1.length || i < texto2.length) {
        if (i < texto1.length) resultado += texto1.charAt(i);
        if (i < texto2.length) resultado += texto2.charAt(i);
        i++;
    }

    return resultado;
}

console.log(intercalar("ace", "bdfgh"));

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

/*
12. parentesisBalanceados(texto)
Devuelve true si los paréntesis () están correctamente balanceados en la cadena,
false en caso contrario.
Ejemplo: "a*(b+(c-d))" → true ; "())(" → false .
Pista: usa una variable contador: +1 en '(' , -1 en ')' ; nunca debe bajar de 0 y al
final debe ser 0.
*/

function parentesisBalanceados(texto) {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === '(') {
            contador++;
        } else if (texto[i] === ')') {
            contador--;
        }
        if (contador < 0) {
            return false;
        }
    }
    return contador === 0;
}

console.log(parentesisBalanceados("a*(b+(c-d))"));
console.log(parentesisBalanceados("())("));