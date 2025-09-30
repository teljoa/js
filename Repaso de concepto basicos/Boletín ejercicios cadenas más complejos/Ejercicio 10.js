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