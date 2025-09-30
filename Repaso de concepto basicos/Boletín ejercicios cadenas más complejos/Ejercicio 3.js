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