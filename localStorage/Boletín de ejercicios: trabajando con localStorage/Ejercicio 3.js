//Ejercicio 3: Eliminando Datos Primitivos

//a) Utilizando localStorage, almacena tu edad bajo la clave "edad". 

localStorage.setItem("edad", 26);

//b) Utiliza la función adecuada para eliminar la clave "edad" de localStorage. 

localStorage.removeItem("edad");

// c) Verifica si la clave "edad" aún existe en localStorage.

const edad = localStorage.getItem("edad");
console.log("¿Existe la clave 'edad'?", edad !== null ? "Sí" : "No");