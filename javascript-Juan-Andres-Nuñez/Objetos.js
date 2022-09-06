//26-OBJETOS


//Los objetos son una colección de informacion (propiedades y métodos) relacionados de alguna forma.

//Ejemplo de objeto

// var opinion= "Es un puto rollo"
// var libro = {
//   titulo: "IT",

//   autor: "Stephen King",
//   genero: "terror",
//   valoracion: 9,
//   tags: ["Pennywise", "floating", "payaso", "Derry"],
//   opinion: opinion,
// };

//Como podemos acceder a las propiedades
//Cuando se llama a una funcion, ya no es una propiedad, sino un métodos

// console.log(libro.autor);
// console.log(libro.tags[2]);
// console.log(libro.opinion);



//27- Objetos II

//borrar propiedades

// delete (libro.opinion);
// console.log(libro.opinion);

//tambien podemos acceder a las propiedades con el brackets notation.

// console.log(libro["autor"]);

//Si creamos una variable, tambien podemos acceder a través de ella

// var escritor = "autor";
// console.log(libro[escritor]);

//Para recorrer las propiedades de un objeto se usa un bucle especial que se llama "for...in"

//Para recorrer a las propiedades de un objeto

// for (var propiedad in libro) {
//   console.log(propiedad);
// }

//Para recorrer la propiedad y el valor de un objeto

// for (var propiedad in libro) {
//   console.log(libro[propiedad]);
// }

//Para mostrar las propiedades y sus valores

// for (var propiedad in libro) {
//   console.log(propiedad +':' + libro[propiedad]);
// }


//28-Métodos y this
//Los métodos son cuando dentro de una propiedad vamos a guardar una función. Se acceder igual que como lo hacemos a una propiedad


// var persona = {
//   nombre: "Juan",
//   edad: "36",

//   ocupacion: "Web developer",
//   color: "rojo",
//   ciudad: "Valencia",
//   //Propiedades

//   caminar: function () {
//     console.log("Estoy caminando");
//   },
//   // saludar: function () {
//   //   console.log("Hola buenas tardes,me llamo " + nombre);
//   // },
//   saludar: function () {
//     console.log("Hola buenas tardes,me llamo " + this.nombre);
//   },
//   //Métodos
// };

// persona.saludar();
// persona.caminar();

//al llamar a saludar da un error, porque busca una propiedad en el ambito global y no la encuentra. Para solucionar este problema, usamos "this", que busca la propiedad(nombre) dentro del objeto(persona),siempre que se lance dentro del método de un objeto



// var otraFuncion = persona.saludar;
// otraFuncion();
// persona.saludar();
//Cuando se invoca  (otraFuncion()), donde esta llamando a una variable que se encuentra fuera del objeto, da un error ya que busca el método en el ambito global, mientras que cuando se invoca(persona.saludar) un métodos que está dentro del objeto con this, lo ejecuta correctamente

//29 - Herencia

//En javascript todos los objetos, arrays y los string y los números, etc. todos heredan algunas propiedades y métodos. Cuando se crean, se instancian o se definen, heredan algunas propiedades y métodos sin necesidad de que los creemos.
//Estas propiedades y métodos están definidos en el prototipo, que es como un plano que se aplica a todos los objetos del mismo tipo
// Estas propiedades heredadas por defecto por todos los objetos vienen del"padre"de todos los objetos
// en JavaScript:Object Prototype.Es el prototipo de mayor nivel.De él cuelgan el resto de los prototipos

////////////////////////Object prototype///////////////////////////////////
///Array prototype//////////////////////////Number prototype//////////////
/////////////////////////////////////////////////////////////////////////
///String prototype/////////////////////////Function prototype//////////
///////////////////////////////////////////////////////////////////////
                           

//30-Creación de Objetos

//Existen dos métodos de creación de objetos mediante otro objeto
//Object create

var CAS = {
  //propiedades
  titulo: "Cien años de soledad",
  autor: "Gabriel Garcia Marquez",
  genero: "Novela",
  //método
  opinion: function () {
    console.log("Una obra maestra");
  }
};

// var CAS1 = Object.create(CAS);
// //Se pueden crear propiedades en el nuevo objeto
// CAS1["estilo"] = "realismo magico";

// console.log(CAS);
// console.log(CAS1);


// console.log(CAS.isPrototypeOf(CAS1));
// console.log(Object.prototype.isPrototypeOf(CAS));

//Syntax sugar for Object.create
var CAS1 = { CAS }

//y se pueden tambien crear propiedades de manera abreviada
CAS1.region = "Sudamerica";
console.log(CAS1);



//new
//Object create asigna un prototipo al nuevo objeto creado con todas las propiedades y métods que contenía el original y por tanto sus hijos los heredan.
//new crea el nuevo objeto, pero no un nuevo prototipo del objeto creado y por tanto sus hijos no heredan las propiedades y funciones
function LC() {
  //propiedades
  this.titulo= "La colmena";
  this.autor= "Camilo Jose Cela";
  this.genero= "Novela";
  //método
  this.opinion= function () {
    console.log("novela social" + this.titulo);
  };
};
console.log(LC);

var LC1 = new LC();

console.log(LC1);