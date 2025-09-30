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