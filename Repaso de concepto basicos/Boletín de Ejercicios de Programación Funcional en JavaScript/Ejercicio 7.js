/*
Ejercicio 7: Sets y Eliminación de Duplicados

Dado el siguiente array con nombres repetidos:

const nombres = ["Ana", "Juan", "Luis", "Ana", "Luis", "María"];
Crea un set para eliminar los nombres duplicados.
Convierte el set de nuevo en un array y muestra la lista de nombres únicos.
*/

const nombres = ["Ana", "Juan", "Luis", "Ana", "Luis", "María"];

let nombresSet= new Set(nombres);
console.log(nombresSet);

let nombresNoDuplicados = Array.from(new Set(nombres)) 
console.log(nombresNoDuplicados);
