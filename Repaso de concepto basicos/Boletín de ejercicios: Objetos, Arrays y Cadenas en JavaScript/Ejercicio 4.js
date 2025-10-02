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