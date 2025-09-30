/*
6️⃣ Transformaciones mixtas
Dado:

let ventas = [
  {producto:'Libro', unidades:3, precio:12.5},
  {producto:'Bolígrafo', unidades:10, precio:1.2},
  {producto:'Carpeta', unidades:2, precio:5.0}
]
Crea un nuevo array con el total por línea (unidades * precio).

Usa reduce para calcular el total de ventas.

Usa filter para quedarte solo con productos de más de 2 unidades.

Convierte el array de productos en una cadena con map + join.

Invierte el array con reverse y comprueba si afecta al original (referencia).

Crea una copia del array usando slice antes de invertirlo.
*/

let ventas = [
  {producto: 'Libro', unidades: 3, precio: 12.5},
  {producto: 'Bolígrafo', unidades: 10, precio: 1.2},
  {producto: 'Carpeta', unidades: 2, precio: 5.0}
];

let totalesPorLinea = ventas.map(v => ({
  ...v,
  total: v.unidades * v.precio
}));
console.log(totalesPorLinea);

let totalVentas = ventas.reduce((acc, v) => acc + v.unidades * v.precio, 0);
console.log(totalVentas);

let productosConMasDe2Unidades = ventas.filter(v => v.unidades > 2);
console.log(productosConMasDe2Unidades);

let productosComoCadena = ventas.map(v => v.producto).join(', ');
console.log(productosComoCadena);

let invertido = ventas.reverse();
console.log(invertido);

let copiaVentas = ventas.slice();
console.log(copiaVentas);

let invertidoSinAfectarOriginal = copiaVentas.reverse();
console.log(invertidoSinAfectarOriginal);