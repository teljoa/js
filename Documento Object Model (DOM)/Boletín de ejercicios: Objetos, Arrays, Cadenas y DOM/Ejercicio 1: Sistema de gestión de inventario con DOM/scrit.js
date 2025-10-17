/*
Descripción: Extiende el sistema de gestión de inventario anterior añadiendo interacción con el DOM. El inventario se mostrará en una tabla HTML y el usuario podrá añadir o eliminar artículos usando formularios.

Tareas:

Crear la tabla del inventario: Al cargar la página, genera dinámicamente una tabla que muestre los artículos del inventario, incluyendo sus nombres, cantidades y precios.
Formulario de añadir artículos: Añade un formulario con los campos necesarios (nombre, cantidad, precio) para que el usuario pueda agregar nuevos artículos al inventario. Al enviar el formulario, se debe actualizar la tabla y el objeto inventory en JavaScript.
Eliminar artículo: Añade un botón "Eliminar" junto a cada artículo en la tabla. Al hacer clic, se debe eliminar el artículo tanto de la tabla como del objeto inventory.
Destacar artículos caros: Usa manipulación del DOM para aplicar una clase CSS que destaque visualmente (por ejemplo, con un color de fondo diferente) los artículos cuyo precio sea mayor de 50.
*/

let inventory = {
  items: [
    { name: "Laptop", quantity: 5, price: 1200 },
    { name: "Mouse", quantity: 25, price: 20 },
    { name: "Keyboard", quantity: 15, price: 50 }
  ],
  totalItems: 0
};

// --- Funciones base ---
function addItem(itemName, quantity, price) {
  let encontrado = false;

  inventory.items.forEach((item) => {
    if (item.name.toLowerCase() === itemName.toLowerCase()) {
      item.quantity += quantity;
      item.price = price;
      encontrado = true;
    }
  });

  if (!encontrado) {
    let itemNew = { name: itemName, quantity: quantity, price: price };
    inventory.items.push(itemNew);
  }

  updateTotalItems();
  renderTable();
}

function removeItem(itemName) {
  inventory.items = inventory.items.filter(item => item.name !== itemName);
  updateTotalItems();
  renderTable();
}

function updateTotalItems() {
  inventory.totalItems = inventory.items.reduce((total, product) => total + product.quantity, 0);
  document.getElementById("totalItems").textContent = inventory.totalItems;
}

// --- Renderizar tabla ---
function renderTable() {
  const tbody = document.querySelector("#inventoryTable tbody");
  tbody.innerHTML = "";

  inventory.items.forEach(item => {
    const tr = document.createElement("tr");
    if (item.price > 50) tr.classList.add("caro");

    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>${item.price}</td>
      <td><button onclick="removeItem('${item.name}')">Eliminar</button></td>
    `;
    tbody.appendChild(tr);
  });
}

// --- Formulario ---
document.getElementById("addForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("itemName").value.trim();
  const quantity = parseInt(document.getElementById("itemQuantity").value);
  const price = parseFloat(document.getElementById("itemPrice").value);

  if (name && quantity > 0 && price >= 0) {
    addItem(name, quantity, price);
    e.target.reset();
  }
});

// --- Inicializar ---
updateTotalItems();
renderTable();