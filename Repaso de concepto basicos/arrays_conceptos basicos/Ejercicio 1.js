/*
Ejercicio 1: Crear y Manipular Arrays

Crea un array llamado listaCompra con los siguientes elementos: 'Peras', 'Manzanas', 'Kiwis', 'Plátanos', y 'Mandarinas'.

Usa el método splice para eliminar las 'Manzanas' de la lista de compra.

Usa el método splice para añadir 'Naranjas' y 'Sandía' después de 'Plátanos' en la lista de compra.

Usa el método splice para reemplazar 'Kiwis' con 'Cerezas' y 'Nísperos' en la lista de compra.

Imprime la lista de compra final por la consola.
*/

let listaCompra=['Peras', 'Manzanas', 'Kiwis', 'Plátanos', 'Mandarinas'];

listaCompra.splice(1,1);
console.log(listaCompra);

listaCompra.splice(3,0,'Naranjas','Sandia');
console.log(listaCompra);

listaCompra.splice(1,1,'Cerezas','Nísperos');
console.log(listaCompra);