//Ejercicio 4: Almacenando y Recuperando Objetos

//a) Crea un objeto JavaScript que represente una persona con propiedades como "nombre", "edad" y "ciudad". 

const persona = {
  nombre: "Joaquin",
  edad: 26,
  ciudad: "Sevilla"
};

//b) Utiliza JSON.stringify para convertir este objeto en una cadena JSON. 

const personaJSON = JSON.stringify(persona);

//c) Almacena la cadena JSON en localStorage bajo la clave "persona". 

localStorage.setItem("persona", personaJSON);

//d) Recupera la cadena JSON de localStorage y utiliza JSON.parse para convertirla de nuevo en un objeto JavaScript. 

const personaGuardada = JSON.parse(localStorage.getItem("persona"));

//e) Muestra en la consola alguna propiedad del objeto recuperado.

console.log("Vivo en:", personaGuardada.ciudad);