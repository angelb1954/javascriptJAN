//Las 2 CLAVES para ENTENDER Arrays JavaScript ✅ [JavaScript a fondo #13]

//Creacion de arrays

// Estructura de datos ordenada por índices únicos
// Para crear un Array el método más utilizado en la notación literal
// Usamos corchetes para delimitar la estructura y separamos cada elemento con comas.
//Sintaxis

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

const dias = ["lunes", "martes", "miercoles"]

//Los Array son objetos recortados:

  //Object

//Se pueden crear Arrays vacíos

 const fechas = []

//Se puede acceder a los elementos de un array a través de su indice

console.log(dias[1])

// Se puede obtener la longihutd de un array

console.log(dias.length)

//Como valor compuesto, los Array se pasan por referencia, no por valor

const diasCopia = dias
console.log(dias === diasCopia)
console.log ([]===[])

dias[3] = "jueves"
dias

// Indices y Elementos

// Podemos cambiar los elementos del Array a través de su índice
// También podemos añadir al final a través de la propiedad length.
//Si no conocemos el índice, podemos usar la propiedad length

dias[4] = "viernes"
dias[0] = "domingo"
dias
dias
dias[2] = "lunes"
dias


//Podemos agregar propiedades a los array como si fueran objetos
//dias.semana = "sabado"
//dias
//No se debe de usar y además no tiene mucho sentido

//Esta forma de usar length nos vaciaria el array
dias.splice(0, dias.length)
dias


// Arrays multi dimensionales

// Dentro de un Array pueden vivir mas Arrays.
//La clave es referirse a sus elementos a través de su índice

const tags = ["terror", "aventura", "suspense"]

const libros = [
  ["IT", 7],
  ["eL tERROR", 9],
  ["El exorcista", 10, ["Demonio", 666]]
]

console.log(libros[1][1]) //

//Mostrar por consola, por ejemplo "Demonio"

console.log(libros[2][2][0]) //

// Desestructurar Arrays

//Gracias a ES6 y la desestructuración, tenemos un método sencillo para extraer valores de un array

// const [cero, uno, dos] = libros
// cero
// uno
// dos

// const [oros, copas, espadas] = libros
// oros
// copas
// espadas

const [, , [oros, copas, espadas]] = libros
oros
copas
espadas



// Incluso podemos combinarlo con los parametros rest (también ES6)

const [it, ...resto] = libros
it
resto


//Manipulando Arrays JavaScript ✅ [JavaScript a fondo #14]

//Añadir elementos

// Para añadir elementos al inicio y mutar el array hay que ir al método unshift (añade uno o mas elementos)

const colores = ["rojo", "verde", "azul"]
colores.unshift("turquesa")
colores

//Para añadir un elemento a inicio de un array sin mutarlo, tenemos el operador spread

console.log(colores)
const color = "amarillo"
const colores2 = [color, ...colores]

colores2
colores

//Para añadir elementos al final y mutar el Array ppodemos usar el método push

colores.push("morado")

colores

//Para añadir un elemento al final a un array sin mutarlo, tenemos el operador spread

const color2 = "cyan"
const colores3 = [...colores, color2]
colores
colores3

//Para añadir elementos en cualquier índice y mutando el array, tenemos el método splice

//Por ejemplo queremos entrar en el índice 2, no queremos eliminar ninguno y queremos añadir uncolor

const color3 = "marron"

colores.splice(2, 0, color3)

colores

//Si queremos añadir el color anterior, pero eliminando el color verde

colores.splice(2, 2, color3)
colores


//Para extraer elementos de cualquier índice, sin mutar el array, usamos el elemento slice, que crea un nuevo array con los elementos extraidos


let colores4 = colores.slice(0, 4)
const colores5 = colores.slice (2)

colores
colores4
colores5

//Para añadir elementos en cualquier índice, sin mutar el array, podemos usar también el método slice


const tonos = ["rojo", "verde", "azul"];
const nuevoTono = "amarillo"
const tonos2 = [
  ...tonos.slice(0, 2),
  nuevoTono, 
  ...tonos.slice(2)
]
console.log(tonos2)

//Eliminar elementos

// Para eliminar elementos al inicio y mutar el Array podemos usar el método shift

// Además retornamos lo eliminado

// Eliminar del inicio, mutando

colores
const rojo = colores.shift()

console.log(rojo, colores)

// Eliminar del inicio, sin mutar

const tonos3 = [tonos.slice(1, 2)]
tonos3
tonos

// Eliminar del final mutando y retornando lo eliminado, usamos pop

const azul = colores.pop()
azul
colores

// Eliminar al final sin mutar

const colores6 = [...colores.slice(0, colores.length - 1)]
colores
colores6

// Eliminar elementos de cualquier indice sin mutar. Usamos el operador spread y el método slice.

// Mutando usamos el método splice, ya lo vimos.
//Ahora vamos a ver como se hace sin mutar



const barajas = ["oros", "copas", "espadas", "bastos"]
const index = 1
const barajas2 = {
  ...barajas.slice(0, index),
  ...barajas.slice(index+1)
}
barajas2

// Encontrar elementos

// Un forma sencilla de buscar unelemento primitivo, es con indexOf.Cuando encuentra la primera coincidencia, deja de buscar.Cuando

const meses = ["Enero", "Febrero", "Marzo", "Abril"]

const indice = meses.indexOf("Marzo")

console.log(meses[indice])

// Encontrar un elemento de un array y eliminarlo

//Encontrar el índice

const ind = meses.indexOf("Febrero")

if (ind > -1) {
  // Eliminarlo

  meses.splice(ind, 1)


}

meses

//Otra forma de encontrar elementos consiste en usar el método includes
// Retorna un valor booleano
// A diferencia de indexOf includes no devuelve el indice, solo verdadero o falso

const isAbril = meses.includes("Abril")

isAbril

// En escenarios mas reales donde tenemos colecciones de informacion, podemos usar el método findIndex que acepta un callback.
// Devuelve el indice del primer elemento de un array que satisfaga las condiciones

const colores10 = [
  {id: 1, nombre: "rojo" },
  {id: 2, nombre: "verde" },
  {id: 3, nombre: "azul"},

]

const indice10 = colores10.findIndex(
  color=> color.id===2
)
indice10

//Si queremos que nos devuelva el elemento en vez del indice, podemos usar find, que nos devuelve el objeto en si, sin mutar el array



//usando funcion normal:
// const verde = colores10.find(function (color) {
//   return color.nombre==="azul"
// })

//usando funcion flecha:
const verde = colores10.find( color=>
  color.nombre === "azul"
);

console.log(verde, colores10)

//filter crea una nueva array con los elementos que pasan el test. No muta el array

const minChars = 5

const resultado = colores10.filter(color => color.nombre.length >= minChars)

resultado
colores10

// Copia superficial vs profunda

// Podemos copiar elementos de forma superficial al utilizar el operador spread, Array.from y similar

// Si los elementos con valores primitivos, se copiarán por valor
const original = ["rojo", true, 99]
//const copia = original.slice()
//const copia = [...original]
const copia = Array.from(original)

//Si modificamos la copia no afectamos al original

copia[1] = false


copia
original




