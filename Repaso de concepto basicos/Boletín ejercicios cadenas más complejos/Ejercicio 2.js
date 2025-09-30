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