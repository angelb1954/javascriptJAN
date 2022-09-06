var nombre="Juan";

var suma = 10+10;

var pregunta = 20>10;

console.log(nombre, suma, pregunta);

///////////////////////////////////////

//4-Bucles.while

var contador = 1;

while(contador<=10)
{
console.log(contador);
contador+=1;

}

console.log("Aquí va el resto del programa.....")

////////////////////////////////////////

//5-Bucles-For

for(var contador=100; contador>=1;contador--) {console.log(contador);

}

console.log("aquí va el resto del programa....");

//////////////////////////////////////

//6-Bucles-Do while

// var contador = 1;
// do{
//   console.log( contador);
//   contador++;
// }
// while(contador<=10);

//   console.log("aquí va el resto del programa....");

///////////////////////////////////

//7-Bucles-Estructuras condicionales

// var edad = 72;
// if(edad<18) {

// alert("Eres menor de edad");
// }
// else if(edad>65){
//   alert("Superas la edad permitida")
// }

// else{
//   alert("Bienvenido al proceso de selección");
// }

//   console.log("aquí va el resto del programa....");

//Se pueden anidar tantas expresiones como queramos. En cuanto una condicion es verdadera, elprograma sale de la estructura (if...else) y no ejecuta el resto de las condiciones)

//////////////////////////////////////

//8-Bucles-switch

var dia = 4;

switch (dia) {
  case 1:
    console.log("Es lunes");
    break;
  case 2:
    console.log("Es martes");
    break;
  case 3:
    console.log("Es miercoles");
    break;
  case 4:
    console.log("Es jueves");
    break;
  case 5:
    console.log("Es viernes");
    break;
  case 6:
    console.log("Es sabado");
    break;
  case 7:
    console.log("Es domingo");
    break;
  default:
    console.log("Dia de la semana no es correcto")

    console.log("aquí va el resto del programa....");
}

//no omitir el break, para que no continue evaluando expresiones una vez encontrada la correcta

//////////////////////////////////////

//9-Bucles-Condiciones complejas

// • En determinadas circunstancias es necesario evaluar
// varias opciones en una misma condición.
// • Para ello, JavaScript dispone de los operadores
//   binarios:
// ▪ && -> AND, todas las condiciones deben ser true
// ■
// || -> OR, una de las condiciones debe ser true.

var edad = 74;

// Rango
if ((edad > 18) & (edad < 65)) {
  console.log("Edad correcta");
} else {
  console.log("Edad incorrecta");
}
//ejemplo con condicion and

var edad = 74;

// Rango
if ((edad > 18) & (edad < 65) || edad == edad) {
  console.log("Edad correcta");
} else {
  console.log("Edad incorrecta");
}
//ejemplo con condiciones and y or

   console.log("aquí va el resto del programa....");
