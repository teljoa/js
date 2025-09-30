/* Parte 1: Manejo de strings

1.Escribe una función llamada longitud que reciba como parámetro de entrada una cadena de texto y devuelva el número de letras que tiene.

Por ejemplo la siguiente llamada a la función:

longitud("Ana");
Debería devolver 3.
*/

function longitud(cadena) {

    let longitu=cadena.length;

    return longitu;
}
let longitudCadena=longitud("Ana");
console.log(longitudCadena);

//2.Escribe una función llamada devuelvePrimeraLetra que reciba como parámetro de entrada una cadena de texto y devuelva la primera letra.

function devuelvePrimeraLetra(cadena){
    
   let letraP=cadena.charAt(0);

    return letraP;
}

let primeraLetra=devuelvePrimeraLetra("Ana");
console.log(primeraLetra);

//3.Escribe una función llamada devuelveUltimaLetra que reciba como parámetro de entrada una cadena de texto y devuelva la última letra.

function devuelveUltimaLetra(cadena){
    
   let letraU=cadena.at(-1);

    return letraU;
}

let ultimaLetra=devuelveUltimaLetra("Anas");
console.log(ultimaLetra);

//4.Escribe una función llamada devuelveEnesimaLetra que reciba como parámetro de entrada una cadena de texto y un número y devuelva la letra que ocupe la posición indicada por el número.

function devuelveEnesimaLetra(cadena,numero) {
    
    let letra=cadena.charAt(numero);

    return letra;
}

let letraPedida=devuelveEnesimaLetra("fhioushgf",5);
console.log(letraPedida);

//5.Utilizando el método substring imprimir las letras que van desde la posición 3 a la 7 de la cadena «wonderful day», es decir “derf”.

console.log("Wonderful day".substring(3,7));

/*
6.Hacer una función devuelveMasLarga que reciba como parámetro de entrada dos cadenas de texto y devuelva la mayor. En caso de que ambas cadenas sean iguales, 
devolveremos la correspondiente al primer parámetro de la función.
*/

function devuelveMasLarga(cadena1 , cadena2) {
    let longitud1=cadena1.length;
    let longitud2=cadena2.length;

    let cadenaLarga1;

    if (longitud1<longitud2) {
        cadenaLarga1=cadena2;
    }else if (longitud1>longitud2 || longitud1==longitud2) {
        cadenaLarga1=cadena1;
    }
    return cadenaLarga1;
}

let cadenal=devuelveMasLarga("grdrhger","gdrsehgrdfbvdfgv");
console.log(cadenal);

/*
7.Hacer una función devuelveMasLarga2 que reciba como parámetro de entrada tres cadenas de texto y devuelva la mayor. En caso de que al menos dos cadenas tengan igual longitud, 
devolveremos el texto Hay al menos dos cadenas iguales.
*/

function devuelveMasLarga2(cadena1,cadena2,candena3) {
    let longitud1=cadena1.length;
    let longitud2=cadena2.length;
    let longitud3=candena3.length;

    let cadenaLarga;

    if (longitud1<longitud2 && longitud2>longitud3) {
        cadenaLarga=cadena2;
    }else if (longitud1>longitud2 && longitud1>longitud3) {
        cadenaLarga=cadena1;
    }else if (longitud3>longitud1 && longitud3>longitud2){
        cadenaLarga=candena3;
    }else if(longitud1==longitud2 || longitud1==longitud3 || longitud2==longitud3){
        cadenaLarga="Hay al menos dos cadenas iguales.";
    }

    return cadenaLarga;
}

let cadenal1=devuelveMasLarga2("grdrhger","gdrsehgrdfbvdfgv","rjfhgfbogrejisdf");
console.log(cadenal1);

/*
8.Hacer una función generarNombre que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena cadena es menor que cinco, la función debe devolver el texto 
‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres primeras letras de cada palabra.
*/

function generarNombre1(cadena1,cadena2,cadena3) {
    let mensaje;

    if(cadena1.length<5 || cadena2.length<5 || cadena3.length<5){
        mensaje="error";
    }else{
        mensaje=cadena1.substring(0,3)+cadena2.substring(0,3)+cadena3.substring(0,3);
    }

    return mensaje;
}

let mensaje1=generarNombre1("frhgrdefwe","gfrgwefwAgr","gtewrgwre");
console.log(mensaje1);

/*
9.Hacer una función generarNombre2 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena cadena es menor que cinco, la función debe devolver el texto 
‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando la última letra de cada palabra.
*/


function generarNombre2(cadena1,cadena2,cadena3) {
    let mensaje;

    if(cadena1.length<5 || cadena2.length<5 || cadena3.length<5){
        mensaje="error";
    }else{
        mensaje=cadena1.at(-1)+cadena2.at(-1)+cadena3.at(-1);
    }

    return mensaje;
}

let mensaje2=generarNombre2("frhgrdefwe","gfrgwefwAgr","gtewrgwre");
console.log(mensaje2);

/*
10.Hacer una función generarNombre3 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena cadena es menor que cinco, la función debe devolver el 
texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres últimas letras de cada palabra.
*/

function generarNombre3(cadena1,cadena2,cadena3) {
    let mensaje;

    if(cadena1.length<5 || cadena2.length<5 || cadena3.length<5){
        mensaje="error";
    }else{
        mensaje=cadena1.at(-1)+cadena1.at(-2)+cadena1.at(-3)+cadena2.at(-1)+cadena2.at(-2)+cadena2.at(-3)+cadena3.at(-1)+cadena3.at(-2)+cadena3.at(-3);
    }

    return mensaje;
}

let mensaje3=generarNombre3("frhgrdefwe","gfrgwefwAgr","gtewrgwre");
console.log(mensaje3);

/*
11.Hacer una función tieneLetra que reciba como parámetro de entrada una cadena de texto y una letra y devuelva true si la letra esta presente en la palabra y false si no lo esta. 
Utilizar para ello el método indexOf.
*/

function tieneLetra(cadena,letra) {
    let existe=cadena.indexOf(letra);
    let respuesta;

    if(existe==-1){
        respuesta="False";
    }else{
        respuesta="True";
    }

    return respuesta;
}

let contiene=tieneLetra("jebngjklds","j");
console.log(contiene);

//12.Realizar la evaluación del ejercicio anterior sin tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas.

function tieneLetra2(cadena,letra) {
    let existe=cadena.toLocaleLowerCase().indexOf(letra.toLocaleLowerCase());
    let respuesta;

    if(existe==-1){
        respuesta="False";
    }else{
        respuesta="True";
    }

    return respuesta;
}

let contiene1=tieneLetra2("Jebngjklds","j");
console.log(contiene1);

/*
13.Hacer una función crearPalabra que reciba como parámetro de entrada una letra y un número y genere una nueva palabra que tenga la letra introducida repetida tantas 
veces como indique el número.
*/

function crearPalabra(letra,numero) {
    let palabra="";
    let i=0;

    while (i<numero) {
        palabra+=letra;
        i++;
    }
    return palabra;
}

let palabra=crearPalabra("e",8);
console.log(palabra);

//14.Completar el ejercicio anterior haciendo que en la nueva palabra generada las letras esten en mayúsculas.

function crearPalabraMayuscula(letra,numero) {
    let palabra="";
    let i=0;

    while (i<numero) {
        palabra+=letra.toLocaleUpperCase();
        i++;
    }
    return palabra;
}

let palabraMayuscula=crearPalabraMayuscula("e",8);
console.log(palabra);

/*
15.Hacer una función addGuiones que reciba como parámetro de entrada una cadena texto y devuelva una nueva cadena que tendrá un guion medio detrás de cada letra. 
Utilizar para ello un bucle for.
*/

function addGuiones(cadena) {
    let cadenaN="";

    cadenaN= cadena.charAt(0);

    for (let i=1;i<cadena.length;i++) {
        cadenaN+="-"+cadena.charAt(i);
    }

    return cadenaN;
}

let cadenaN=addGuiones("hrugihio");
console.log(cadenaN);

/*
16.Hacer una función contadorDeLetras que reciba como parámetro de entrada una cadena de texto y una letra y devuelva el número de veces que esa letra esta presente en 
la palabra. Utilizar para ello un bucle for.
*/

function contadorDeLetras(cadena,letra) {
    let repeticiones=0;
    let repite;

    for(let i=0;i<cadena.length;i++){
        repite=cadena.charAt(i);
        if(repite==letra){
            repeticiones++
        }
    }
    return repeticiones;
}

let letrasCon=contadorDeLetras("hgfiowegfhidesjfklwe","e");
console.log(letrasCon);

/*
17.Realizar la evolución del ejercicio anterior sin tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas Hacer una función 
contadorDeLetras2 que reciba como parámetro de entrada dos cadenas de texto y una letra y devuelva la cadena de texto en la que dicha letra esta más presente. 
Utilizar para ello un bucle for. 
No tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas.
*/

function contadorDeLetras1(cadena,letra) {
    let repeticiones=0;
    let repite;

    for(let i=0;i<cadena.length;i++){
        repite=cadena.charAt(i);
        if(repite.toLocaleLowerCase()==letra.toLocaleLowerCase()){
            repeticiones++
        }
    }
    return repeticiones;
}

let letrasCon1=contadorDeLetras1("hgfiowegfhidEsjfklwe","e");
console.log(letrasCon1);

function contadorDeLetras2(cadena,cadena1,letra) {
    let repeticiones1=0;
    let repeticiones2=0;
    let repeticiones;
    let repite;

    for(let i=0;i<cadena.length;i++){
        repite=cadena.charAt(i);
        if(repite.toLocaleLowerCase()==letra.toLocaleLowerCase()){
            repeticiones1++
        }
    }
    for(let i=0;i<cadena1.length;i++){
        repite=cadena1.charAt(i);
        if(repite.toLocaleLowerCase()==letra.toLocaleLowerCase()){
            repeticiones2++
        }
    }
    if(repeticiones1<repeticiones2){
        repeticiones=cadena1;
    }else{
        repeticiones=cadena;
    }
    return repeticiones;
}

let letrasCon2=contadorDeLetras2("hgfiowegfhidEsjfklwe","nbhrsjkgfhbeskjfg","e");
console.log(letrasCon1);

/*
18.Escribe una función llamada toCase que reciba como parámetro de entrada una cadena de texto y devuelva esa misma cadena de texto en minúsculas, un guión medio y de 
nuevo esa misma cadena de texto en mayúsculas.

Por ejemplo, la siguiente llamada a la función:

toCase("Pablo");

Devería devolver: pablo-Pablo
*/

function toCase(cadena) {
    return cadena.toLocaleLowerCase()+"-"+cadena.toLocaleUpperCase();
}

let cadenan=toCase("Pablo");
console.log(cadenan);

/*
19.Escribe una función llamada shortcut que tome dos cadenas de texto y devuelva la inicial de cada una de las dos cadenas.
Por ejemplo, la llamada a la función:

shortcut('Amnesty', 'International');
Debería devolver «AI».
*/

function shortcut(cadena1,cadena2) {
    return cadena1.charAt(0)+cadena2.charAt(0);
}

let scadena=shortcut('Amnesty', 'International');
console.log(scadena);

/*
20. Escribe una función llamada firstChar, que devuelva la primera letra que no sea un espacio cuando una cadena de texto es pasada.

Para ello, podemos eliminar los espacios en blanco que pudiera haber al principio y al final de la cadena de texto utilizando la el método trim(). Si no estás muy 
seguro de como funciona este método, consúltalo en internet, que no es tan difícil!.

Por ejemplo, la llamada a la función:

firstChar(" Rosa Parks ");
Debería devolver R.
*/

function firstChar(cadena) {
    let trimmed = cadena.trim(); 
    let char = '';

    for (let c of trimmed) {  
        if (c !== ' ') {
            char = c;
            break;
        }
    }

    return char;
}

console.log(firstChar(" Rosa Parks ")); 

/*
21. Escribe una función llamada indexOfIgnoreCase que reciba dos cadenas de texto y devuelva la posición de la primera ocurrencia de la segunda cadena de texto en la 
primera. La función no debería tener en cuenta mayúsculas y minúsculas.

Por ejemplo:

indexOfIgnoreCase("bit","it");
y

indexOfIgnoreCase("bit","IT");
deberían devolver 1
*/

function indexOfIgnoreCase(cadena1, cadena2) {
    const lowercadena1 = cadena1.toLowerCase();
    const lowercadena2 = cadena2.toLowerCase();
    return lowercadena1.indexOf(lowercadena2);
}

console.log(indexOfIgnoreCase("bit", "it")); 

/*
22. Escribe una función llamada firstWord que reciba como parámetro de entrada una cadena de texto y devuelva la primera palabra de esa cadena. La primera palaba de la cadena 
serán todos los caracteres que hay hasta el primer espacio.

Por ejemplo:

firstWord("see and stop");
debería devolver «see».
*/

function firstWord(cadena) {
    return cadena.split(' ')[0];
}

console.log(firstWord("see and stop"));

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

/*
Parte 3: DNI y Letra

Implementa una función llamada validarDNI que tome un número de DNI (con o sin letra) como argumento y determine si es un DNI válido. La función debe calcular la 
letra correspondiente al número y compararla con la letra proporcionada (si se proporciona). Devuelve true si es válido y false si no lo es.

Prueba la función validarDNI con varios números de DNI, incluyendo algunos con letra y otros sin ella.
*/

function validarDNI(dni) {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const numero = parseInt(dni.slice(0, -1), 10);
    const letraDada = dni.slice(-1).toUpperCase();
    const letraCorrecta = letras[numero % 23];

    return letraDada && letraDada === letraCorrecta;
}

console.log(validarDNI("12345678Z"));