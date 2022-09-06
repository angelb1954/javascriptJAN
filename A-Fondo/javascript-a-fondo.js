
//Curso JavaScript a Fondo #01
// La etiqueta <script>

// ¢ Puerta de entrada al cédigo JavaScript en nuestros
// proyectos.

// ¢ Vive en el <head> de nuestros documentos HTML*.

// <script>
// console.log("Hola Mundo $")
// </script>

// La etiqueta <script>

// ¢ Através de <script> podemos cargar JavaScript
// [ac laaloe

// Cele ROM lle ell 0 oka At BOL Mee]
// recurso, ya sea relativo o absoluto.


// La etiqueta <script>

// Muchas veces nos encontraremos con la etiqueta <script> en <footer>
// en lugar de <header>, para asegurarnos de que el DOM esta listo antes de acceder a él.
// Con la etiqueta <noscript> podemos mostrar un mensaje al usuario cuyonavegador tenga javascript desactivado



//Curso JavaScript a Fondo #02
//Alzado(hoisting)

// JavaScript es un lenguaje con tipos dinamicos, es decir, podemos asignar y reasignar diferentes tipos a una misma variable (de ahi el nombre: variable).

// Para hacerlo tenemos que utilizar dos fases diferentes: declaraci6n e inicializaci6n.



// var favorito; //Declaración
// favorito = 66 //inicialización
// favorito= "Juan" //reasignación

// Alzado (hoisting)

// © Cuando declaramos una variable javascript le asigna el tipo undefined.


//   Alzado(hoisting)

//   si la declaracion de variable es posterior a la referencia , javascript considera en esta la variable como undefined

// console.log(nombre)
// var nombre


// La respuesta es undefined porque JavaScript, al interpretar tu cédigo alza al inicio del programa la declaraci6n de variables (no la inicializaci6n) y las funciones declaradas.
// Esto explica que se pueda invocar una funcion antes de declararla.

// saludar() // "Hola W"
// function saludar() {

//   console.log("Hola Y")
// }


//Curso JavaScript a Fondo #03
// Ambito javascript. Variables let

//Ambito global es el que está fuera de cualquier funcion
// Hasta ahora hemos creado variables con var. Estas tienen ambito de funci6n: pueden ser accedidas
// desde la funci6n donde fueron declaradas (y funciones interiores).


// function saludar() {
// console. log("Hola " + nombre)
// }

//Desde el ambito local se puede mirar a cualquier ambito hasta el global, siempre en orden desde dentro hacia afuera
//Desde el ambito global no se puede acceder al ambito local

// Ambito y LET

// © Sin embargo, si declaramos variables con let (ES2015),
// tenemos ambito de bloque, es decir, solo pueden ser accedidas desde el bloque en el que se  declararon, o bloques interiores.

//Este ambito de bloque tiene sus ventajas. Por ejemplo al utilizarlo con estructuras de control y de flujo.

//  for (let i = 0; i <= 100; i++) {
//  console.log(i)
// }

//  console.log(i)

//El for anterior con var seguiria ejecutándose fuera del ambito del bloque, lo cual no es lo que se busca en un for

// for (var i = 0; i <= 100; i++) {
//  console.log(i)
//  }

// console.log(i)
 

// Ademas, al usar let tenemos un comportamiento mucho mas estricto en el alzado (hoisting), algo que para muchos es otra ventaja.


// console.log(nombre)
// var nombre = "Juan"
// Cannot access ‘nombre’ before initialization


// Curso JavaScript a Fondo #04
// Const


// Al utilizar const nos aseguramos que no ocurrirá ninguna re-asociacion a otro valor en esa variable.

// Eso si, usar constantes no significa que sean inmutables. Podemos mutar propiedades del valor asociado a la constante

// En los valores compuestos como objetos y matrices se pueden modificar propiedades asociadas a ese valor asociado a una Constante, sin que eso suponga una modificación de la constante

//const nombre = "Juan"

//si se intenta modificar, javascript no lo permite, es un valor primitivo

//nombre = "Pedro" //SyntaxError: Identifier 'nombre' has already been declared

// sin embargo, en un array u objeto, nos permite modificar sus propiedades

// const numeros = [1, 2, 3, 4]

// numeros[4] = 5;
// console.log(numeros);

//En cuanto a su acceso, igual que con let disponemos de ambito de bloque

//Las variables creadas con const igual que con let, no son alzadas

// {
//   const nombre = "Elias"
// }
// console.log(nombre)
//ReferenceError: nombre is not defined/



//Curso JavaScript a Fondo #06
//PARÁMETROS y ARGUMENTOS

// Todas las funciones pueden tener parámetros para hacerlas aún más polivalentes.
// Los parámetrosson accesibles como variables en el cuerpo de la función
//Al invocar la función, pasamos valores como argumentos que son aceptados como parámetros

//Podemos establecer parámetros por defecto
// function saludar(nombre, apellido="Nuñez") {
//   console.log("Hola, me llamo " + nombre +" "+apellido);

// }

// saludar("Juan")
//Hola, me llamo Juan Nuñez

//Y también podemos establecer parámetros explícitos que tendrán precedencia sobre los parámetros explícitos

// function saludar(nombre= "Juan", apellido = "Nuñez") {
//   console.log("Hola, me llamo " + nombre + " " + apellido);
// }

// saludar(undefined, "Charro");
//Resultado(Hola, me llamo Juan Charro)

//Curso JavaScript a Fondo #05
//Funciones JavaScript: aprende a usar los 3 tipos

// En javascript hay tres formas de crear funciones
// - La primera forma es a través de funciones declaradas
//   - Requieres un identificador y son alzables

// function saludar() {
//     console.log("Hola, me llamo Juan")
// }
// saludar();

// También podemos crear una expresión funcional, que consiste en asociar una función a una variable.
// Puede tener nombre o ser anónima
// Lo que se alza es la declaración, no la asignación


// const saludar=function () {
//   console.log("Hola, me llamo Juan");
// }
// saludar();


// Por ultimo, podemos crear una versión aun mas acortada de una función anónima a través de las funciones Flecha. No disponen de contexto propio de this. Disponen de retorno implícito, delimitadores opcionales y no se alzan

// const saludar = () => {
//   console.log("Hola me llamo Juan")
// }

// saludar()


//Ejemplo de conversión de una funcion tradicional en funcion flecha

// Función tradicional

// function (a){
//   return a + 100;
// }

// Desglose de la función flecha

// 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
// (a) => {
//   return a + 100;
// }

// 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
// (a) => a + 100;

// 3. Suprime los paréntesis de los argumentos
// a => a + 100;

//Sintaxis básica

//Un parámetro. Con una expresión simple no se necesita return:

// param => expression


//Varios parámetros requieren paréntesis. Con una expresión simple no se necesita return:

// (param1, paramN) => expression

//Las declaraciones de varias líneas requieren corchetes y return:

// param => {
//   let a = 1;
//   return a + b;
// }

//Varios parámetros requieren paréntesis. Las declaraciones de varias líneas requieren corchetes y return:

// (param1, paramN) => {
//    let a = 1;
//    return a + b;
// }




//Argumentos y Parámetros Rest JavaScript - [Curso JavaScript #07]

// Con los parámetros rest(ES2015) podemos aceptar c8alquier números de parámetros en una función. Son compatibles con los parámetros normales, pero deben declararse siempre al final.

// function checkout(...prices) {
// Array. isArray (prices)
// const total=prices.reduce((acc,curr)=> acc+curr)
// console. log(total)
// }

//Imaginemos una función que sirva para reunir precios

// function checkOut(pri, pr2, pr3,) {
//   const total = pri + pr2 + pr3
//   console.log(total)
// }
// checkout(10, 33, 66)

//Ahora imaginemos que queremos añadir dos precios más. Pero nos olvidamos de dar valor al último

// function checkOut(pr1, pr2, pr3, pr4, pr5) {
//   const total = pr1 + pr2 + pr3+pr4+pr5
//   console.log(total);
// }
// checkOut(10, 33, 66, 77);

//El resultado de la suma es NaN, porque al no haber dado valor a uno de los precios este es undefined
//Y tuvimos que añadir manualmente los parámetros, las constantes y los precios¡¡Es facil olvidar alguno!!

//Para simplificar esto se crearon las funciones con parámetros rest


// function checkOut(...prices) {
// const total = prices.reduce( (acc, curr) => acc + curr)
// console.log(total)

//   //acc= acumulador, curr=Actual. Son argumentos de la propiedad reduce los array
  
  
// }

// checkOut(10, 33, 66, 77, 88)
// checkout(10, 33, 88)|
// checkOut(10, 33, 88, 1, 432, 76, 123)


//Podríamos usar también una función normal en vez de una función flecha

// function checkOut(...prices) {
//   const total = prices.reduce(function(acc, curr) {
//     return acc + curr
// })

// console.log(total)
// }

// checkOut(10, 33, 66, 77, 88)
// checkOut(10, 33, 88)
// checkOut(10, 33, 88, 1, 432, 76, 123)

//arguments
// function checkOut() {
//   //arguments es un objeto similar a Array accesible dentro de funciones que contiene los valores de los argumentos pasados a esa función.

//   //Nota: Si estás escribiendo código compatible con ES6, entonces se deben preferir los parámetros rest

//   const prices = Array.from(arguments);
//   const total = prices.reduce((acc, curr) => acc + curr);
//   console.log(total);
// }


// checkOut(10, 33, 66, 77, 88)


//JavaScript return valor - [Curso JavaScript #08]

//Cuando una instrucción de retorno se llama en una función, se detiene la ejecución de esta. Si se especifica un valor dado, este se devuelve a quien llama a la función. Si se omite la expresión, undefined se devuelve en su lugar.

// function checkOut(name, ...prices) {
//   const total = prices.reduce((acc, curr) => {
//     return acc + curr
//   })
  
//   return total
// }

// const result = checkOut("Juan", 76, 88, 99, 1023)
// console.log(result)

//Cuando se invoca return se detiene la función y se devuelve el valor de la derecha de return. Eso con un valor explícito de return
//En las funciones flecha que no tienen llaves, el return es implicito
//La siguiente función devuelve el cuadrado de su argumento, x, donde x es un número.

// function cuadrado(x) {
//   let potencia = x * x;
//   return console.log(`El cuadrado de ${x} es  ${potencia} `);
  
// }
// cuadrado(4);

//Los CLOSURES en JavaScript - [JavaScript a fondo #09 ]

//Un closure es: "retornar una función desde otra función, con acceso al entorno de variables de un ámbito exterior"
//Entender como funciona un closure es imprescincible para entender javascript

// function soyUnClosure() {
//   const variableLocal = "Juan";
//   return function () {
//     return console.log( variableLocal.toUpperCase());
//   }

//   }

// let closure=soyUnClosure();
// closure();



//cumple todos los requisitos de una funcion Closure.
// I) Retorna una función desde otra función
// II) Con acceso al entorno de variables de un ambito exterior.Llama a "variableLocal" desde la funcion anónima
// III) Esto permite que podamos invocar la variable de la funcion original aunque ya no sepueda llamar directamente a la misma





// function creaFunc() {
//   var nombre = "Mozilla";
//   function muestraNombre() {
//     console.log(nombre);
//   }
//   return muestraNombre;
// }

// var miFunc = creaFunc();
// miFunc();



//Cada closuore retornado es independiente al anterior, es decir, forman un nuevo ambito.
//Eso si, un closure puede modificar el estado atrapado en su interior


// function pedirPizza(UID) {
//   let cantidadPizzas = 0;
  
//   const pedido = `pedido_${UID}`
// return function(pizza){
//     cantidadPizzas++
    
//     return `${pedido}_${pizza}_${cantidadPizzas}`
// }


// }

// const pedidoUID=pedirPizza(21456798)

// console.log(pedidoUID("barbacoa"))
// console.log(pedidoUID("vegetal"))
// console.log(pedidoUID("carbonara"))


//IIFE JavaScript: Qué es y CÓMO SE USA - [JavaScript a fondo #10 ]

//Son las siglas de "Inmediately Invoked Function Expression"
//La parte másimportante es inmediatamente

// (function () {
//   //Haz cosas...
// })()
  // Para crear un IIFE debemos envolver una función con el operador de agrupación De esta forma indicamos que es una expresión que debe ser evaluada

  // Como la expresión es evaluada como una función, podemos añadir unos parénteses al final para auto ejecutarla inmediatamente

  // Se le pueden pasar parametros sin ningun problema

//   (function (name) {
//     console.log("Mi nombre es" + name)
//   }
// )("Juan")


// La principal utilidad de un IIFE es la auto - creación de un ámbito funcional nuevo e independiente

// Un ejemplo útil típico es su uso en los bucles for

// for (var i = 0; i < 10; i++) {
//   console.log(i)

//   setTimeout(function () {
//     console.log("el número es " + i)
//   }, 1000)

// }

//En el segundo console.log imprime siempre 10, porque cuando se ejecuta el bucle se ha completado y el valor de i es 10.
//Una solución es aplicar IIFE

for (var i = 0; i < 10; i++) {
  console.log(i);


   (function(i)
  {
    setTimeout(function(){
      console.log("el num es " +i)
    }, 1000)
})(i)
  
}

function saludar() {
  console.log("Hello, world");
}
saludar();














