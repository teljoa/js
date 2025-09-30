/*
2️⃣ Procesamiento de notas
Partimos de:

let notas = [5.2, 3.9, 6, 9.75, 7.5, 3, 6.5, 9.75]
Crea una función flecha aprobados que devuelva solo las notas ≥5.

Usa reduce para calcular la nota media.

Usa Math.max(...notas) para obtener la nota más alta.

Crea un Set con las notas para eliminar duplicados.

Con map, devuelve un array con las notas en formato "Nota: X".

Con some, comprueba si hay algún suspenso (<5).

Con every, comprueba si todas son ≥3.
*/

let notas = [5.2, 3.9, 6, 9.75, 7.5, 3, 6.5, 9.75]

let aprobados = () => notas.filter(nota => nota >= 5);
console.log(aprobados());

let mediaT = notas.reduce((total, nota) => total + nota, 0) / notas.length;
console.log(mediaT);

let notaMaxima = Math.max(...notas);
console.log(notaMaxima);

let notasSinDuplicados = new Set(notas);
console.log(notasSinDuplicados);

let notasFormateadas = notas.map(nota => `Nota: ${nota}`);
console.log(notasFormateadas);

let haySuspensos = notas.some(nota => nota < 5);
console.log(haySuspensos);

let todasMayorIgual3 = notas.every(nota => nota >= 3);
console.log(todasMayorIgual3);