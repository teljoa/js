//Ejercicio 5: Eliminando Objetos

//a) Utilizando localStorage, almacena un objeto cualquiera bajo una clave de tu elección. 

const producto = { nombre: "Laptop", precio: 999 };
localStorage.setItem("producto", JSON.stringify(producto));

//b) Utiliza la función adecuada para eliminar la clave que contiene el objeto. 

localStorage.removeItem("producto");

//c) Verifica si la clave que contiene el objeto aún existe en localStorage.

const existe = localStorage.getItem("producto");
console.log("¿Existe la clave 'producto'?", existe ? "Sí" : "No");