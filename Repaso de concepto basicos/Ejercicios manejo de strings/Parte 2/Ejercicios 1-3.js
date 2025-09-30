/*
Parte 2: Template Literals

1.Crea una función llamada saludoPersonalizado que tome un nombre y una edad como argumentos y utilice un template literal para devolver un saludo personalizado que 
incluya el nombre y la edad.
*/

function saludoPersonalizado(nombre, edad) {
    return `Hola, ${nombre}. Tienes ${edad} años.`;
}

console.log(saludoPersonalizado("Joaquin", 26));

//2.Utiliza un template literal para crear una cadena que muestre una lista de compras con varios elementos. Luego, muestra esa cadena en la consola.

const listaDeCompras = (items) => {
    return `Lista de compras: 
    - ${items.join('\n       - ')}`;
};

console.log(listaDeCompras(["agua", "pan"]));

/*
3.Escribe una función llamada informacionProducto que tome un objeto con información de un producto (nombre, precio, categoría, etc.) y utilice un template literal para 
generar una descripción del producto. Luego, muestra esa descripción en la consola.
*/

function informacionProducto(producto) {
    return `Producto: ${producto.nombre}, Precio: ${producto.precio}€, Categoría: ${producto.categoria}`;
}


const producto = { nombre: "Camiseta", precio: 20, categoria: "Ropa" };
console.log(informacionProducto(producto));