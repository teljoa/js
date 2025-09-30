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
