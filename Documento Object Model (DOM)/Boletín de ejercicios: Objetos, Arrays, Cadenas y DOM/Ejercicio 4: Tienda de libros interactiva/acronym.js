/*
Descripción: Extiende el sistema de la tienda de libros para que sea interactivo desde el navegador. Los libros deben mostrarse en una tabla y se debe poder 
agregar, eliminar y filtrar libros mediante la interfaz gráfica.

Tareas:

Mostrar libros: Al cargar la página, muestra una tabla con los libros disponibles, incluyendo su título, autor, precio y categoría.

Añadir libros: Añade un formulario para que el usuario pueda añadir nuevos libros a la tienda. Al enviar el formulario, el libro debe añadirse tanto al objeto 
bookStore como a la tabla.

Filtrar por categoría: Añade un campo de selección que permita filtrar los libros por categoría. Al seleccionar una categoría, solo los libros de esa categoría 
deben aparecer en la tabla.

Ordenar por precio: Añade botones para ordenar los libros en la tabla de mayor a menor precio y viceversa.
*/
let bookStore = {
  books: [
    { title: "1984", author: "George Orwell", price: 15, category: "Fiction" },
    { title: "Sapiens", author: "Yuval Noah Harari", price: 20, category: "Non-fiction" },
    { title: "The Selfish Gene", author: "Richard Dawkins", price: 25, category: "Science" }
  ],

  addBook(title, author, price, category) {
    let exist = false;

    for (let book of bookStore.books) {
      if (book.title.toLowerCase() === title.toLowerCase() && book.author.toLowerCase() === author.toLowerCase()) {
        exist = true;
        break;
      }
    }

    if (exist) {
      alert("Ya existe en la lista el libro que has intentado añadir.");
    } else {
      bookStore.books.push({title,author,price: parseFloat(price),category,
      });
    }
  },

  removeBook(title) {
    bookStore.books = bookStore.books.filter(book => book.title !== title);
  },

  getBooksByCategory(category) {
    if (category === "all") return bookStore.books;
    return bookStore.books.filter(book => book.category.toLowerCase() === category.toLowerCase());
  },

  sortBooksAsc() {
    bookStore.books.sort((a, b) => a.price - b.price);
  },

  sortBooksDesc() {
    bookStore.books.sort((a, b) => b.price - a.price);
  }
};

function renderTable(filteredBooks = bookStore.books) {
  const tbody = document.querySelector("#bookTable tbody");
  tbody.innerHTML = "";

  filteredBooks.forEach(book => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>$${book.price.toFixed(2)}</td>
      <td>${book.category}</td>
      <td><button class="delete-btn" onclick="deleteBook('${book.title}')">Eliminar</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function updateCategoryFilter() {
  const select = document.getElementById("filterCategory");
  const uniqueCategories = [...new Set(bookStore.books.map(b => b.category))];

  select.innerHTML = `<option value="all">Todas las categorías</option>`;
  uniqueCategories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  });
}

function deleteBook(title) {
  bookStore.removeBook(title);
  updateCategoryFilter();
  renderTable();
}

document.getElementById("addBookForm").addEventListener("submit", e => {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const price = document.getElementById("price").value.trim();
  const category = document.getElementById("category").value.trim();

  if (title && author && price && category) {
    bookStore.addBook(title, author, price, category);
    e.target.reset();
    updateCategoryFilter();
    renderTable();
  }
});

document.getElementById("filterCategory").addEventListener("change", e => {
  const selectedCategory = e.target.value;
  const filtered = bookStore.getBooksByCategory(selectedCategory);
  renderTable(filtered);
});

document.getElementById("sortAsc").addEventListener("click", () => {
  bookStore.sortBooksAsc();
  renderTable();
});

document.getElementById("sortDesc").addEventListener("click", () => {
  bookStore.sortBooksDesc();
  renderTable();
});

updateCategoryFilter();
renderTable();