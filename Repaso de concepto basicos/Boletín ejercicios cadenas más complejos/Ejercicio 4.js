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