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
