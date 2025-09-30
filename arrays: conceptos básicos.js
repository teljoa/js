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

/*
Ejercicio 5: Otros Métodos de Array

Crea dos arrays, array1 y array2, con algunos elementos.

Utiliza el método concat para concatenar los dos arrays en uno nuevo llamado concatenado.

Utiliza el método reverse para invertir el orden de los elementos en concatenado.

Utiliza el método indexOf para encontrar la posición del elemento 'Plátanos' en concatenado.

Utiliza el método lastIndexOf para encontrar la última posición del elemento 'Plátanos' en concatenado.
*/

let array1 = ["Manzanas", "Peras", "Plátanos"];
let array2 = ["Naranjas", "Plátanos", "Uvas"];

let concatenado = array1.concat(array2);
console.log("Concatenado:", concatenado);

concatenado.reverse();
console.log("Invertido:", concatenado);

let primeraPosicion = concatenado.indexOf("Plátanos");
console.log("Primera posición de 'Plátanos':", primeraPosicion);

let ultimaPosicion = concatenado.lastIndexOf("Plátanos");
console.log("Última posición de 'Plátanos':", ultimaPosicion);