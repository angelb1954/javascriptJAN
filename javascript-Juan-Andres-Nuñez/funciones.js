
//10-Funciones nativas-alert

//alert("Mensaje");

//Si creamos en mensaje en una variable:

//var mensaje= "Hola, buenos dias"

//alert(mensaje);

//podemos incluir una expresion matemática

//alert(40+50);


//11-Funciones nativas-confirm

//confirm("Desea proceder");

//Si se acepta devuelve verdadero, si no Falso

// console.log(confirm("Desea proceder"));//true


  
//   var confirmar = confirm('¿Seguro que desea proceder?');
  
//    if (confirmar) {
  
// console.log('Borrando cuenta de usuario');}
  
//   else{
// console.log("Acción abortada");}




//-12Funciones nativas-prompt
//El método Window.prompt() muestra un diálogo con mensaje opcional, que solicita al usuario que introduzca un texto.

 
  // var usuario = prompt('Introduce tu nombre de usuario: ');

  // if (usuario){

  //   console.log("Usuario introducido");
  // }
  
  // else{

  //   console.log("No has introducido un usuario")
  // }

//NOTA: En un string, cuando se introduce una cadena de texto devuelve TRUE. Si no se introduce nada"" devuelve FALSE

//Vamos a utilizar prompt, confirm y alert para crear un programa de control de usuarios
//Añadimos trim para eliminar espacios en blanco al principio y final de la cadena

  // var usuario = prompt('Introduce tu nombre de usuario: ');
  // if (usuario && usuario.trim()) {
  //   var confirmar = confirm('¿Es ' + usuario + ' correcto?');
  //   if (confirmar) {
  //     alert("usuario correcto");
  //   } else {
  //     alert("usuario incorrecto");
  //   }
  // } else {
  //   alert("No has introducido un usuario");
  // }


//13-Operador typeof

  // console.log(typeof "Hola")
  
  // undefined
  // console.log(typeof 36)
  
  
  // var nombre = "Juan"
  
  // console.log(typeof nombre)
  
  // var objeto = "Juan"
    
  //   console.log(typeof objeto)
  //   string
  //   undefined
  //   console.log(typeof "Hola")
  //   string
    
  //   console.log(typeof 36)
  //   number
  //   undefined
  //   var nombre = "Juan"
  //   undefined
  //   console.log(typeof nombre)
  //   string
    
    
  //   var objeto = { nombre: "Juan" }
  //   undefined
  //   objeto.nombre
  //   'Juan'
  //   console.log(typeof objeto)
  //   object
    
  //   var numeros = [1, 2, 3, 4, 5]
    
  //   console.log(typeof numeros)
  //   object
    
  //   console.log(typeof null)
  //   object

//14-Creacion de funciones

// function saludar(){

// console.log("Hola, Juan");

// }






//Uso de parametros

  // function saludar(nombre, profesion) {

  //   console.log("Hola, me llamo " + nombre + " y soy " + profesion);

  // }
  // saludar("Pedro", "carnicero");



//   function mayusculas(texto){

// return (texto.toUpperCase());


//   }
// var nombre = mayusculas("Juan")

// console.log(nombre);



//15-La importancia de return

// function sumarCuadrados(a,b){
//   return(a*a+b*b);
// }

// alert(sumarCuadrados(123, 453));



//16-Ambito de las variables

  // function nombrar() {

  //   let miNombre = "AngelBGarcia";
  //   console.log(miNombre);
  // }
  // nombrar();

  // console.log(miNombre);

//Las variables se pueden invocar desde dentro de una función hacia una variable externa.
//Desde fuera de la función no se puede invocar una variable interna de una función.
//Salvo que la crear la función se elimine el prefijo var o let para crearla. Entonces javascript la considera una variable global y eso permite invocarla desde fuera de la función

//22 - Expresiones funcionales

//Una funcion declarada puede ser invocada antes de ser escrita. Esto es así, porque el intérprete de javascript alza las funciones al principio del código, independientemente del lugar en el que estén escritas.
//las funciones declaradas se declaran mediante la palabra "function" y un identificador("funcionDeclarada")

// funcionDeclarada();

// function funcionDeclarada() {
//   console.log("Declarada"
//   );
// }

//Expresion funcional. Variable=function anonima. No se puede invocar antes de ser declarada, a diferencia de las funciones declaradas

// var expresionFuncional = function () {
  
//   console.log("Expresión");
// }
// expresionFuncional();

// //IIFE Expresiones funcionales anonimas que se invocan inmediatamente
// (function () {
//   console.log("Hola, desde IIFE");
// })();
//el primer par de parentesis crea una expresión funcional y el segundo la invoca inmediatamente


//23-Alzado(hoisting)

//Es importante conocer el ordende carga de nuestro código para que cada linea de código esté disponible cuando se necesite.
//Javascript prioriza el orden en el que carga las funciones, asignaciones y código de ejecución.
//Orden de carga del código
//1-Variables (inicializadas) y funciones declaradas.
//2-Asignaciones, operaciones y código ejecutable.

// Escribimos nuestra función así...

// function sumarCuadrados (a, b) {
// var x = sumar (a* a, b * b); 
// return x;}
// function sumar (c, d) {
// var a = c + d;
// return a;
// }

// Pero JavaScript la carga así...

// function sumar Cuadrados (a, b) {
// var x = undefined;
// function sumar (c, d) {
// var a = c + d; 
// return a;
// x = sumar (a * a, b * b);
// }
// return x;

// El código declarado como variables y 
// funciones es lo primero en ser "alzado".

//¿Qué número devolverá la función?
// function obtenerNumero () {
//   function retornaNumero() {
//     return 80;
//   }
//   return retornaNumero();
//   function retornaNumero() {
//     return 50;
//   }
//   retornaNumero();
// }
// obtenerNumero();

//Interpretado por JavaScript
// function obtenerNumero() {
//   function retornaNumero() {
//     return 80;
//   }
//   function retornaNumero() {
//     return 50;
//   }
//     return console.log( retornaNumero());

//   }


obtenerNumero();

//Las funciones declaradas son alzadas antes de comenzar la ejecución.
//Como tienen el mismo nombre, la segunda sobreescribe a la primera

//Que numero devolverá la función?

// function obtenerNumero(){
// var retornaNumero = function () { return 80; }
// return retornaNumero();
//   var retornaNumero = function () {
    
//   }
//   return console.log(50);
// }

// obtenerNumero();


//Interpretado por JavaScript

// function obtenerNumero () {
// var retornaNumero = undefined; 
// var retornaNumero = undefined;
// retornaNumero = function() { 
// return console.log(80);
// }
// return retornaNumero();
// retornaNumero = function () { 
// return 50;
//   }
  
// }

// obtenerNumero();

//las expresiones funcionales nunca son alzadas, son tratadas como asignaciones
//En este caso, la segunda expresión funcional es inalcanzable ya que está después de return


//¿Qué número devolverá la función?

function obtenerNumero () {
return retornaNumero();
var retornaNumero = function() { 
return 80;
}
var retornaNumero = function() { 
return 50;
}
}
obtenerNumero();

//Interpretado por JavaScript

function obtenerNumero() {
  var retornaNumero = undefined;
  var retornaNumero = undefined;
  return retornaNumero();
  retornaNumero = function () {
    return 80;
  }
  retornaNumero = function () {
    return 50;
  }
}
obtenerNumero ();

// Las dos expresiones funcionales 
// son inalcanzables ya que 
// estan después del return.