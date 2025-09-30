/*
Parte 3: DNI y Letra

Implementa una función llamada validarDNI que tome un número de DNI (con o sin letra) como argumento y determine si es un DNI válido. La función debe calcular la 
letra correspondiente al número y compararla con la letra proporcionada (si se proporciona). Devuelve true si es válido y false si no lo es.

Prueba la función validarDNI con varios números de DNI, incluyendo algunos con letra y otros sin ella.
*/

function validarDNI(dni) {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const numero = parseInt(dni.slice(0, -1), 10);
    const letraDada = dni.slice(-1).toUpperCase();
    const letraCorrecta = letras[numero % 23];

    return letraDada && letraDada === letraCorrecta;
}

console.log(validarDNI("12345678Z"));