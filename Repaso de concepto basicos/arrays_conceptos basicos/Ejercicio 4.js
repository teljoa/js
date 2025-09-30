/*
Ejercicio 4: Ordenar un Array de Objetos

Crea un array de objetos llamado alumnos donde cada objeto tiene las propiedades nombre y edad. Agrega al menos 5 objetos a este array.

Escribe una función que tome el array de alumnos y lo ordene por edad de menor a mayor utilizando el método sort.

Imprime el array de alumnos ordenado por la consola.
*/

let alumnos = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 19 },
  { nombre: "María", edad: 25 },
  { nombre: "Carlos", edad: 20 },
  { nombre: "Sofía", edad: 21 }
];

let alumnosOrdenados= alumnos.sort(function(alumno1,alumno2) {
   if(alumno1.edad>alumno2.edad){
        return 1
    }else if(alumno1.edad<alumno2.edad){
        return -1;
    }
    return 0;
})

console.log(alumnosOrdenados);