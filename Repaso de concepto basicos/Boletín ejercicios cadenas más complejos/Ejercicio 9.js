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