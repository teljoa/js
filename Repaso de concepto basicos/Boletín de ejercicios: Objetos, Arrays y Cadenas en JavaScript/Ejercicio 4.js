/*
Ejercicio 4: Transformación de datos
Crea un objeto bookStore que represente una tienda de libros. Cada libro tendrá las siguientes propiedades: title, author, price y category (Ficción, No ficción, Ciencia, etc.).

Ejemplo inicial:

let bookStore = {
  books: [
    { title: "1984", author: "George Orwell", price: 15, category: "Fiction" },
    { title: "Sapiens", author: "Yuval Noah Harari", price: 20, category: "Non-fiction" }
  ]
};
Tareas:

Crea un método addBook(title, author, price, category) que añada un nuevo libro al array books.
Crea un método getBooksByCategory(category) que devuelva un array con todos los libros de esa categoría.
Utiliza reduce() para calcular el precio total de todos los libros.
Utiliza filter() para devolver solo los libros cuyo precio sea mayor de 18.
Utiliza sort() para ordenar los libros por precio, de mayor a menor.
*/

let bookStore = {
  books: [
    { title: "1984", author: "George Orwell", price: 15, category: "Fiction" },
    { title: "Sapiens", author: "Yuval Noah Harari", price: 20, category: "Non-fiction" }
  ],

  addBook(title, author, price, category) {
    this.books.push({ title, author, price, category });
  },

  getBooksByCategory(category) {
    return this.books.filter(book => book.category.toLowerCase() === category.toLowerCase());
  },

  getTotalPrice() {
    return this.books.reduce((total, book) => total + book.price, 0);
  },

  getExpensiveBooks() {
    return this.books.filter(book => book.price > 18);
  },

  sortBooksByPriceDesc() {
    return [...this.books].sort((a, b) => b.price - a.price);
  }
};

bookStore.addBook("The Selfish Gene", "Richard Dawkins", 25, "Science");
console.log(bookStore.getBooksByCategory("Fiction"));
console.log(bookStore.getTotalPrice());
console.log(bookStore.getExpensiveBooks());
console.log(bookStore.sortBooksByPriceDesc());