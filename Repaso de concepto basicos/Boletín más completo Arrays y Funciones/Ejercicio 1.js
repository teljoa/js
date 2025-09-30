/*
1️⃣ Gestión de una lista de productos
Tienes este array inicial:

let productos = [
  { id: 1, nombre: 'Teclado', precio: 25.5, stock: 10 },
  { id: 2, nombre: 'Ratón', precio: 15.0, stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 150.0, stock: 5 },
  { id: 4, nombre: 'USB', precio: 8.0, stock: 25 }
]
Haz lo siguiente:

Con filter, obtén los productos con stock > 0.

Con map, crea un array solo con los nombres de productos.

Con reduce, calcula el valor total del stock (precio × stock).

Usa sort para ordenar por precio ascendente.

Crea una función buscarProducto(nombre) que devuelva el objeto que coincide (o null si no existe).

Usa desestructuración para extraer nombre y precio del producto con id=3.

Convierte el array de productos en un Set de nombres y de nuevo en array para eliminar duplicados.
*/

let productos = [
  { id: 1, nombre: 'Teclado', precio: 25.5, stock: 10 },
  { id: 2, nombre: 'Ratón', precio: 15.0, stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 150.0, stock: 5 },
  { id: 4, nombre: 'USB', precio: 8.0, stock: 25 }
]

let productosStock= productos.filter(function (productos){
    return productos.stock>0;
})
console.log(productosStock);

let productosNombres= productos.map(nombre => productos.nombre);
console.log(productosNombres);

let valorTotalStock = productos.reduce((total, producto) => {
  return total + (producto.precio * producto.stock);
}, 0);
console.log(valorTotalStock);

let productosOrdenados = productos.sort((a, b) => a.precio - b.precio);
console.log(productosOrdenados);

function buscarProducto(nombre) {
  return productos.find(producto => producto.nombre === nombre) || null;
}

console.log(buscarProducto('Monitor'));
console.log(buscarProducto('Tablet'));

let producto3 = productos.find(p => p.id === 3);
let { nombre, precio } = producto3;

console.log(nombre); 
console.log(precio);

let nombresConDuplicados = productos.map(p => p.nombre);
let nombresUnicos = new Set(nombresConDuplicados);
console.log(nombresUnicos);
