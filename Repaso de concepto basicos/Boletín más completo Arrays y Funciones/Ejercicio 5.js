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