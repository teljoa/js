/*
Ejercicio 1: Funciones y Arrow Functions

Crea una función llamada saludar que tome un nombre como argumento y muestre un mensaje de saludo en la consola. Luego, reescribe la misma función utilizando una 
arrow function.
*/

function saludar(nombre) {
  return "¡Hola, " + nombre + "!";
}

console.log(saludar('joaquin'));


const saludararrow = (nombre) => {
 return `¡Hola, ${nombre}!`;
};

console.log(saludararrow('joaquin'));

/*
Ejercicio 2: Parámetros y Valores por Defecto

Crea una función llamada potencia que calcule la potencia de un número dado a un exponente dado. La función debe tener un valor por defecto de exponente igual a 2.
*/

const potencia = (base, exponente = 2) => base ** exponente;

console.log(potencia(4,6));

/*
Ejercicio 3: Funciones de Primera Clase

Crea una función llamada aplica_fn que tome un número y una función como argumentos y aplique la función al número. Prueba la función con una función que devuelva 
el cuadrado del número.
*/

const aplica_fn = (numero, fn) => fn(numero);


const cuadrado = x => x ** 2;


console.log(aplica_fn(5, cuadrado)); 

/*
Ejercicio 4: Métodos de Programación Funcional

Dado el siguiente array de números [1, 2, 3, 4, 5, 6, 7, 8, 9], realiza las siguientes operaciones:

Utiliza filter para crear un nuevo array con los números pares.
Utiliza map para crear un nuevo array con los cuadrados de los números.
Utiliza reduce para calcular la suma de todos los números.
Utiliza every para verificar si todos los números son mayores que 0.
Utiliza some para verificar si algún número es mayor que 10.
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const pares = numeros.filter(num => num % 2 === 0);
console.log("Pares:", pares); 

const cuadrados = numeros.map(num => num ** 2);
console.log("Cuadrados:", cuadrados);

const suma = numeros.reduce((acum, num) => acum + num, 0);
console.log("Suma:", suma); 

const todosMayoresQueCero = numeros.every(num => num > 0);
console.log("Todos mayores que 0:", todosMayoresQueCero); 

const algunoMayorQueDiez = numeros.some(num => num > 10);
console.log("Alguno mayor que 10:", algunoMayorQueDiez); 

/*
Ejercicio 5: Copia y Referencia

Dado el siguiente objeto:

const persona = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Calle Principal",
    ciudad: "Ciudad"
  }
};
Crea una copia independiente del objeto persona utilizando spread ({...}).
Modifica la edad en la copia y verifica si la edad en el objeto original ha cambiado.
Modifica la calle en la copia y verifica si la dirección en el objeto original ha cambiado.
*/

const persona = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Calle Principal",
    ciudad: "Ciudad"
  }
};

const personaCopia = JSON.parse(JSON.stringify(persona))  

personaCopia.edad = 35;

console.log("Edad original:", persona.edad);       
console.log("Edad copia:", personaCopia.edad);     

personaCopia.direccion.calle = "Calle Secundaria";

console.log("Calle original:", persona.direccion.calle); 
console.log("Calle copia:", personaCopia.direccion.calle); 

/*
Ejercicio 6: Desestructuración de Arrays y Objetos

Dado el siguiente array [1, 2, 3, 4, 5]:

Utiliza la desestructuración para asignar los valores a las variables a, b, c, d, y e.
Realiza la misma tarea para el objeto { nombre: "Alice", edad: 25 }.
*/

const numeros6 = [1, 2, 3, 4, 5];

const [a, b, c, d, e] = numeros;

console.log(a);
console.log(b); 
console.log(c);
console.log(d);
console.log(e);

const persona6 = {
  nombre: "Alice",
  edad: 25
};

const { nombre, edad } = persona;

console.log(nombre);
console.log(edad);

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
