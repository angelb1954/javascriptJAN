//17 - Matrices (Arrays)

// var marcasCoches = ["Ford", "Seat", "Volswagen", "Opel"];

//Admiten todo tipos de datos (string, numeros, otras matrices, funciones). Pueden convivir distintos tipos de datos enla misma matriz.
//Tienen un índice secuencial numérico, que enpieza siempre por el 0.
//Admiten la propiedad "length"

//18- Métodos de matrices

// var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

//Metodo shift
//Elimina el primer elemento existentes en una matriz

// var dias = [
//   "lunes",
//   "martes",
//   "miercoles",
//   "jueves",
//   "viernes",
//   ]

//   var primerDia = dias.shift();

// console.log(dias);
// console.log(primerDia);

//Elimina el primero elemento del array, pero lo retorna, de tal manera que podemos guardarlo en una variable

// var ultimoDia = dias.pop();
// console.log(ultimoDia);
// console.log(dias)
//   ;

//pop elimina el ultimo elemento de la matriz y lo retorna por si lo queremos usar

// dias.push("sabado");
// console.log(dias);

//push añade el elemento que le señalemos, al final del array

// console.log(dias);

// dias.splice(1, 2,);

// dias.splice(5, 0, "domingo", "lunes");

// console.log(dias);

//splice añade o elimina elementos en la posicion que le indiquemos. Si"delete Count"" es 0 interpreta que queremos añadir elementos
//sintaxis
//array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

//19-Array indexOf

// var colores = ["blanco", "negro", "rojo", "azul"];

// console.log(colores[1]);
// console.log(colores.indexOf("azul"));

//Vamos a crear una funcion que  busque en elemento del array y lo elimine

// console.log(colores);

// function eliminar(elemento, matriz) {
//   var indice = matriz.indexOf(elemento);
//   if (indice > -1) {
//     //El elemento existe
//     matriz.splice(indice, 1);
//   }
//   //el elemento no existe
//   else alert("El elemento no existe");
// }
// eliminar("azul", colores);

// console.log(colores);

//20 - Matrices multidimensionales


//las matrices pueden almacenar todo tipo de datos, como variables, operaciones aritméticas, string, números y también otras matrices


// var color = "rojo";
// var matriz = [
//   color,
//   "Juan",
//   10 * 10,
//   "Juan" + color,
//   function saludar() {
//     alert("hola, como estás")
    
//   },
//   ["lunes", "martes", "miercoles"],
// ];
//llamar a un elemento de una matriz que está dentro de otra matriz

// console.log(matriz[5][1]);//con esto se llama al martes de la matriz que está dentro de la matriz

//21-Recorrer matrices

// var matriz = ["lunes", "martes", "miercoles", "jueves", "viernes"]

//for típico

// var longitud = matriz.length, i = 0;
// for (i; i < longitud; i++) {
//   console.log(matriz[i]);
// }

//forEach

// function mostrarElemento(elemento) {
//   console.log(elemento);
// }
// matriz.forEach(mostrarElemento);

//for...of

// for (let elemento of matriz) {
  
//   console.log(elemento);
// }



//24 - Closures

// function funcion1() {
//   var miVariable = 1;
//   function funcionInterna() {
//     console.log(miVariable);
//   }
//   return funcionInterna;
// }
// var variableExterna = funcion1();
// //console.log(variableExterna);

// variableExterna();

// function funcion2() {
////
//   var miVariable = 2;
//   function funcionInterna() {
//     console.log(miVariable);
//   }

//   funcionExterna(funcionInterna);
// }

// function funcionExterna(funcion) {
//   funcion();
// }

// funcion2();
////

// function espera(mensaje) {
//   setTimeout(function () {
//     console.log(mensaje);  
//   }, 2000)
// }

// espera("Hola desde la perplejidad");


//25-Closures y Bucles

// for (var i = 1; i <= 5; i++) {
//   setTimeout(function () { console.log(i) }, i * 1000)
// }

//Para arreglar el problema  creamos una expresión funcional

for (var i = 1; i <= 5; i++) {
  (function (z) {
    setTimeout(function () {
      console.log(z);

    }, z * 1000);
  })(i);
}
//NO ENTIENDO NADA. REVISAR








