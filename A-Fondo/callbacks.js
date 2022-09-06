//CALLBACKS en JavaScript - [JavaScript a fondo #11]


//Es una funcion que se pasa a otra función como argumento para su ejecución posterior

// function miFunction(fn) {
 
//   fn()
// }
// function saludar() {
//   console.log("Hola Mundo")
// }



// miFunction(saludar)

//Javascript, aunque nosotros no lo veamos, hace esto

// miFunction(function () {
//   console.log("HOLA MUNDO")
// }
// )

///////////////////////////////
//En definitiva
//Un callback es una función:

// function saludar() {
//   console.log("Hola Mundo");
// }


//que se pasa a otra función:

// function miFunction(fn) {
//   fn();
// }

//como argumento para su ejecución
////////////////////////////////

//Unejemplo de callback sincrono es el que usamos en el método forEach de Arrays

//Recorrer los numeros de un array

// const nums = [1, 2, 3, 4, 5]

// function recorrer(numero) {
//   console.log(numero)
// }

// nums.forEach(recorrer)

// function hacerDoble(numero) {
//   return numero*2
// }

// const doble = nums.map(hacerDoble)

// console.log(doble)
//////////////////////////////////////////

// var numbers = [1, 4, 9];
// var roots = numbers.map(function (num) {
//   return Math.sqrt(num);
// })
// console.log(roots)

////////////////////////////////////////////

// const pares = nums.filter(num =>num% 2 === 0)
// console.log(pares)

//Asincronia es cuando se empieza una tarea y la tarea tarda un tiempo en realizarse, pudiendo realizarse mientras otras tareas

//Ejemplos de callbacks asincronos forEach, setTimeout, map, filter, etc. En este ejemplo usamos el método setTimeout de window

// setTimeout(saludar, 2000)

//función declarada que se usa como callback

// function saludar() {
//   console.log("HOLA")
// }
// setTimeout(function(){}, 3000)

///////////////////////////////////////////

const URL = "wmedia.es/juan.jpg"

// function descargar(url) {
//   console.log("Descargando..." + url)
//   setTimeout (function()
 
//   {
//     //fingiendo una tarea asincrona, es decir, que consume un tiempo y no bloquea la ejecución  
//     console.log("Descargado:" + url)
//    // fn(url)
//   }, 3000)
// }

// function procesar(archivo) {
  
// console.log("Procesando..."+ archivo)

// }
// descargar(URL)
// procesar(URL)

// Resultado:
// Descargando...wmedia.es/juan.jpg   //1
// Procesando...wmedia.es/juan.jpg   //3
// Descargado:wmedia.es/juan.jpg    //2

// Esto es ilógico, no puede estar procesando antes de terminar de descargar.

//Solución: Vamos a hacer que escargar, además de url, acepte un callback:

// function descargar(url, fn) {
//   console.log("Descargando..." + url);
//   setTimeout(function () {
//     //fingiendo una tarea asincrona, es decir, que consume un tiempo y no bloquea la ejecución
//     console.log("Descargado:" + url);
//     //Cuando se ha descargado todo, llamamos al callback
    
//     fn(url)
//   }, 3000);
// }

// function procesar(archivo) {
//   console.log("Procesando..." + archivo);
// }

// //Quitamos la invocación de procesar y la incluimos en descargar
// descargar(URL, procesar)
//procesar(URL);

// Resultado:
// Descargando...wmedia.es/juan.jpg    //1
// Descargado:wmedia.es/juan.jpg      //2
// Procesando...wmedia.es/juan.jpg   //3

//Otro modo de escribirlo:

function descargar(url, fn) {
  console.log("Descargando..." + url);
  setTimeout(function () {
    //fingiendo una tarea asincrona, es decir, que consume un tiempo y no bloquea la ejecución
    console.log("Descargado:" + url);
    //Cuando se ha descargado todo, llamamos al callback
    
    fn(url)
  }, 3000);
}

descargar(URL, function (archivo) {
  console.log("Procesando..."+ archivo)
})

// Resultado:
// Descargando...wmedia.es/juan.jpg
// Descargado:wmedia.es/juan.jpg
// Procesando...wmedia.es/juan.jpg
