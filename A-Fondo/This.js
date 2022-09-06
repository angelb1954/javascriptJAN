// Funciones y this

// El concepto de this puede ser confuso, ya que es dinámico y depende del contexto de ejecución.

// En una función, el valor por defecto de this es Window (si no estamos en modo estricto)


// var nombre = "Juan"
// function saludar(){
  
//   console.log(this.nombre)

// }
// saludar()

//- Pero su valor (la referencia a un valor) se puede cambiar de forma dinámica

// var nombre = "Juan"
// const persona = { nombre: "Andrés" }
// function saludar() {
//   console.log(this.nombre)
// }
// saludar.call(persona)

//Podemos comprobarlo usando un objeto

var nombre = ("Juan")
const objeto = {
  nombre: "Andres",
  saludar() {
    console.log(this.nombre)
  }                                     
}

objeto.saludar()