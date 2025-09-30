/*
3️⃣ Cadena de operaciones sobre arrays
Con:

let palabras = ['hola','adios','bien','mal','javascript','JS','array','map']
Convierte todas las palabras a mayúsculas con map.

Filtra solo las que tengan más de 3 letras.

Ordena por longitud ascendente.

Usa join para unirlas en una cadena separada por guiones.

Usa split para volver a tenerlas en array.

Con reduce, cuenta cuántas letras en total suman todas.
*/

let palabras = ['hola','adios','bien','mal','javascript','JS','array','map']

let mayusculas = palabras.map(p => p.toUpperCase());
console.log(mayusculas);

let filtradas = mayusculas.filter(p => p.length > 3);
console.log(filtradas);

let ordenadas = filtradas.sort((a, b) => a.length - b.length);
console.log(ordenadas);

let cadenaUnida = ordenadas.join('-');
console.log(cadenaUnida);

let arrayDividido = cadenaUnida.split('-');
console.log(arrayDividido);

let totalLetras = arrayDividido.reduce((total, palabra) => total + palabra.length, 0);
console.log(totalLetras);