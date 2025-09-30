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

/*
4️⃣ Gestión de alumnos (objetos + FP)
Con:

let alumnos = [
  {nombre:'Ana', nota:7.5, curso:'DAW'},
  {nombre:'Luis', nota:4.5, curso:'DAW'},
  {nombre:'María', nota:9.0, curso:'DAW'},
  {nombre:'Pedro', nota:6.0, curso:'DAM'},
  {nombre:'Lucía', nota:8.5, curso:'DAM'}
]
Obtén con filter solo los del curso DAW.

Usa map para quedarte con los nombres de los aprobados (nota≥5).

Con reduce, calcula la media de notas de DAM.

Con find, busca al alumno llamado ‘María’.

Con findIndex, obtén la posición del primer suspenso.

Con sort, ordena los alumnos por nota descendente.

Crea una función que reciba un array de alumnos y devuelva un objeto con {aprobados:x, suspensos:y}.
*/

let alumnos = [
  {nombre:'Ana', nota:7.5, curso:'DAW'},
  {nombre:'Luis', nota:4.5, curso:'DAW'},
  {nombre:'María', nota:9.0, curso:'DAW'},
  {nombre:'Pedro', nota:6.0, curso:'DAM'},
  {nombre:'Lucía', nota:8.5, curso:'DAM'}
]

let DAW = alumnos.filter(alumno => alumno.curso === 'DAW');
console.log(DAW);

let nombresAprobados = alumnos
  .filter(alumno => alumno.nota >= 5)
  .map(alumno => alumno.nombre);
console.log("Aprobados:", nombresAprobados);

let damStudents = alumnos.filter(alumno => alumno.curso === 'DAM')
let mediaDAM= damStudents.reduce((media,alumno)=> media + alumno.nota, 0) / damStudents.length;
console.log(mediaDAM);

let alumn= alumnos.find(a=>a.nombre === 'María')||null;
console.log(alumn);

let suspen=alumnos.findIndex(a=>a.nota<5);
console.log(suspen);

let ordenadasDes = alumnos.sort((a, b) => b.nota - a.nota);
console.log(ordenadasDes);

function contarAprobadosSuspensos(arr) {
  return arr.reduce(
    (res, alumno) => {
      if (alumno.nota >= 5) {
        res.aprobados++;
      } else {
        res.suspensos++;
      }
      return res;
    },
    { aprobados: 0, suspensos: 0 }
  );
}

console.log("Conteo:", contarAprobadosSuspensos(alumnos));

/*
5️⃣ Funciones y parámetros variables
Crea una función media(...valores) que calcule la media de cualquier número de argumentos.

Usa spread para pasar un array de números a Math.min y Math.max.

Crea un objeto config con varias propiedades y usa spread para clonar y cambiar solo una propiedad.

Usa desestructuración en parámetros para una función que reciba {nombre, nota} y muestre en consola un mensaje como "Alumno: nombre - Nota: nota".
*/

function media(...valores) {
  if (valores.length === 0) return 0;
  const suma = valores.reduce((acc, val) => acc + val, 0);
  return suma / valores.length;
}

console.log(media(4, 8, 6));

let numeros = [3, 7, 2, 9, 5];

let minimo = Math.min(...numeros);
let maximo = Math.max(...numeros);

console.log("Mínimo:", minimo);
console.log("Máximo:", maximo); 

let config = {
  tema: 'oscuro',
  idioma: 'es',
  notificaciones: true
};

let nuevaConfig = {
  ...config,
  idioma: 'en'
};

console.log("Original:", config);
console.log("Clonada y modificada:", nuevaConfig);

function mostrarAlumno({ nombre, nota }) {
  console.log(`Alumno: ${nombre} - Nota: ${nota}`);
}

let alumno = { nombre: 'Carlos', nota: 8.5 };
mostrarAlumno(alumno);

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

/*
7️⃣ Reto final: Sistema de ranking
Queremos almacenar en localStorage las puntuaciones de un juego:

Crea una función guardarPuntuacion(nombre, puntos) que guarde en localStorage un array de objetos con {nombre, puntos}.

Crea otra función obtenerRanking() que devuelva el array ordenado por puntos descendente.

Muestra el top 3 usando slice y forEach.

Asegúrate de que no se repiten jugadores usando un Set de nombres antes de guardar.
*/

let ranking = [];

function guardarPuntuacion(nombre, puntos) {
  const nombresSet = new Set(ranking.map(jugador => jugador.nombre));

  if (!nombresSet.has(nombre)) {
    ranking.push({ nombre, puntos });
  } else {
    console.log(`El jugador "${nombre}" ya está en el ranking.`);
  }
}

function obtenerRanking() {
  return [...ranking].sort((a, b) => b.puntos - a.puntos);
}

function mostrarTop3() {
  const rankingOrdenado = obtenerRanking();

  console.log("Top 3 jugadores:");
  rankingOrdenado.slice(0, 3).forEach((jugador, index) => {
    console.log(`${index + 1}. ${jugador.nombre} - ${jugador.puntos} puntos`);
  });
}

guardarPuntuacion("Ana", 150);
guardarPuntuacion("Luis", 200);
guardarPuntuacion("Carlos", 180);
guardarPuntuacion("Ana", 300); 


/*
8️⃣ Reto extra: Todo junto
Crea un script que:

Pida al usuario una lista de números separados por coma con prompt().

Convierta la cadena en array con split.

Convierta todos los elementos a Number.

Calcule y muestre:

La suma y media con reduce.

El máximo y mínimo con Math.max(...arr) y Math.min(...arr).

Un nuevo array con solo los pares.

Un nuevo array con todos multiplicados ×2.

Si hay al menos un número mayor que 100 (some).

Si todos son positivos (every).

Muestre todos los resultados con console.table().
*/