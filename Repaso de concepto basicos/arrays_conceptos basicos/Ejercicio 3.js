/*
Ejercicio 3: Ordenar Notas

Crea un array llamado notas con las siguientes calificaciones: [4, 8, 3, 10, 5].

Escribe una función que tome el array de notas y lo ordene de menor a mayor. Utiliza el método sort.

Imprime el array de notas ordenado por la consola.
*/

let notas=[4, 8, 3, 10, 5];

let notasort= notas.sort(function(nota1,nota2){
    if(nota1>nota2){
        return 1
    }else if(nota1<nota2){
        return -1;
    }
    return 0;
});

console.log(notasort);