/*
1️⃣ Variables y constantes
Añade la documentación JSDoc adecuada:
*/

// @ts-check

/** 
 * URL base para la API
 * @constant {string}
 */
const API_URL = "https://api.example.com";

/**
 * Contador inicializado en 0
 * @type {number}
 */
let contador = 0;

/**
 * Indica si el usuario está activo
 * @type {boolean}
 */
const usuarioActivo = true;

/*
2️⃣ Función 1
*/

/**
 * Calcula el área de un rectángulo.
 * @param {number} base - La base del rectángulo.
 * @param {number} altura - La altura del rectángulo.
 * @returns {number} El área del rectángulo.
 */
function areaRectangulo(base, altura) {
return base * altura;
}

/*
3️⃣ Función 2
*/

/**
 * Convierte un texto a mayúsculas.
 * @param {string} texto - El texto a convertir.
 * @returns {string} El texto convertido a mayúsculas.
 */
function convertirEnMayusculas(texto) {
return texto.toUpperCase();
}
/*
4️⃣ Función 3
*/

/**
 * Genera un nombre completo concatenando nombre y apellido.
 * @param {string} nombre - El primer nombre.
 * @param {string} apellido - El apellido.
 * @returns {string} El nombre completo.
 */
function generarNombreCompleto(nombre, apellido) {
return nombre + " " + apellido;
}

/*
5️⃣ Función 4 (retorna booleano)
*/

/**
 * Verifica si una persona es mayor de edad.
 * @param {number} edad - La edad de la persona.
 * @returns {boolean} `true` si la persona es mayor de edad, `false` si no lo es.
 */
function esMayorDeEdad(edad) {
return edad >= 18;
}

/*
6️⃣ Objeto con propiedades
Añade un @typedef y documéntalo:
*/

/**
* @typedef {Object} coche
* @property {string} marca
* @property {string} modelo
* @property {number} año
*/
/** @type {coche} */
const coche = {
marca: "Toyota",
modelo: "Corolla",
año: 2020
};

/*
7️⃣ Función con objeto como parámetro
*/

/**
 * Muestra la información de un coche.
 * @param {coche} coche - El objeto coche con las propiedades marca, modelo y año.
 * @returns {string} La información del coche en formato de cadena.
 */
function mostrarCoche(coche) {
return `${coche.marca} ${coche.modelo} (${coche.año})`;
}
