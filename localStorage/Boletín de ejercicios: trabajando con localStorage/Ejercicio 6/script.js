/*
a) Utiliza JavaScript para capturar los valores del formulario y agregar un nuevo usuario a una lista visible en la página. 
Cada usuario en la lista debe incluir un botón "Borrar" al lado de su nombre, dirección y dirección de correo electrónico.

b) Cuando se haga clic en el botón "Borrar" junto a un usuario, debe eliminarse ese usuario de la lista.

c) Utiliza localStorage para almacenar la lista de usuarios de manera persistente, de modo que los usuarios agregados no se pierdan cuando se actualice la página 
o se cierre el navegador.

Ampliación:

d) Ahora vamos a permitir que se puedan editar los usuarios, para ello, cuando se añada un usuario a la lista, además del botón borrar, tendrá también un botón editar. 
Cuando se haga clic en el botón "Editar" junto a un usuario, se cargarán los datos del usuario en los campos del formulario y el botón cambiará a Editar usuario. 
Al pulsar el botón se cambiarán los datos del usuario en el localStorage. Los cambios realizados deben reflejarse en la lista.
*/

const form = document.getElementById("userForm");
const userList = document.getElementById("userList");
let users = JSON.parse(localStorage.getItem("users")) || [];

renderUsers();

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const editIndex = form.dataset.editIndex;

    if (editIndex !== undefined) {
        users[editIndex] = { name, address, email };
        delete form.dataset.editIndex;
        form.querySelector("button").textContent = "Agregar Usuario";
    } else {
        users.push({ name, address, email });
    }

    localStorage.setItem("users", JSON.stringify(users));

    form.reset();
    renderUsers();
});

function renderUsers() {
  userList.innerHTML = "";

  users.forEach((user, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${user.name}</strong> - ${user.address} - ${user.email}
      <button onclick="editUser(${index})">Editar</button>
      <button onclick="deleteUser(${index})">Borrar</button>
    `;
    userList.appendChild(li);
  });
}

function deleteUser(index) {
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  renderUsers();
}
