/*
Ejercicio 2: Copiar un Array

Crea un array llamado original con algunos elementos.

Crea un nuevo array llamado copia que sea una copia de original utilizando el método slice.

Modifica un elemento en copia y verifica si también se modifica en original.
*/

let listaCompraOriginal=['Peras', 'Manzanas', 'Kiwis', 'Plátanos', 'Mandarinas'];

let copia = listaCompraOriginal.slice(); 
copia[1] = 'Uvas';

console.log(listaCompraOriginal);
console.log(copia);