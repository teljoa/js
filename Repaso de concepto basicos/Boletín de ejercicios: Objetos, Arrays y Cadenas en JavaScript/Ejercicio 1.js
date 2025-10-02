/*
Ejercicio 1: Sistema de gestión de inventario
Crea un sistema de gestión de inventario para una pequeña tienda. Debes definir un objeto llamado inventory que contenga las siguientes propiedades:

items: un array de objetos, donde cada objeto representa un artículo con las claves name, quantity y price.
totalItems: una propiedad que almacene el número total de artículos disponibles.
Ejemplo inicial:

let inventory = {
  items: [
    { name: "Laptop", quantity: 5, price: 1200 },
    { name: "Mouse", quantity: 25, price: 20 },
    { name: "Keyboard", quantity: 15, price: 50 }
  ],
  totalItems: 0
};
Tareas:

Actualiza la propiedad totalItems automáticamente sumando las cantidades de cada artículo del array items.
Crea un método addItem(itemName, quantity, price) que añada un nuevo artículo al inventario o actualice el quantity si el artículo ya existe.
Crea un método removeItem(itemName) que elimine un artículo del inventario basado en su nombre.
Usa los métodos avanzados de arrays (forEach, map, filter, reduce) para realizar las siguientes tareas:
Imprime en consola el nombre de todos los artículos que cuestan más de 50.
Obtén la cantidad total de artículos en stock cuyo nombre contenga la letra "o" (manipulación de cadenas).
*/

let inventory = {
  items: [
    { name: "Laptop", quantity: 5, price: 1200 },
    { name: "Mouse", quantity: 25, price: 20 },
    { name: "Keyboard", quantity: 15, price: 50 }
  ],
  totalItems: 0
};

inventory.totalItems= inventory.items.reduce((total,product)=>total+=product.quantity,0);
console.log(inventory.totalItems);

function addItem(itemName, quantity, price){
  let encontrado=false;

  inventory.items.forEach((item,i)=>{
    if(item.name === itemName){
    item.quantity+=quantity;
    item.price=price;
    encontrado=true;
  }});
  if(!encontrado){
    let itemNew={name: itemName, quantity: quantity, price: price};
  inventory.items.push(itemNew);
  }
  inventory.totalItems= inventory.items.reduce((total,product)=>total+=product.quantity,0);
}
addItem("Laptop",7,1206);
console.log(inventory.items);

addItem("micro",7,1206);
console.log(inventory.items);

function removeItem(itemName){
  inventory.items.forEach((item,i)=>{
    if(item.name=== itemName){
      inventory.items.splice(i,1);
    }
  })
  inventory.totalItems= inventory.items.reduce((total,product)=>total+=product.quantity,0);
}
removeItem("Mouse");
console.log(inventory.items);

inventory.items.forEach((item,i)=>{
  if(item.price>50){
    console.log(item);
  }
})
inventory.totalItems= inventory.items.reduce((total,product)=>total+=product.quantity,0);

let totalConO = inventory.items
  .filter(item => item.name.toLowerCase().includes("o"))
  .reduce((sum, item) => sum + item.quantity, 0);
inventory.totalItems= inventory.items.reduce((total,product)=>total+=product.quantity,0);
console.log("Cantidad total de artículos con 'o' en el nombre:", totalConO);