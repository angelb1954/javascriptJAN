//Tutorial Promesas

// La promesa es un compromiso de hacer algo en un tiempo marcado.
// La promesa tiene tres estados posibles:
// -pendiente
// -satisfecha
// -rechazada

// let desarrollo = new Promise(function (resolve, reject) {
//   //Acciones necesarias para conseguir un resultado satisfactorio

//   const proyecto = "resultado"

//   setTimeout(() => {
//     let aleatorio = Math.random()
//     if (aleatorio < 0.4) {
//       resolve(proyecto)
//     }
//     else {
//       reject("no resuelto a tiempo")
//     }

//   }, 1500)
// })
// //resolve(proyecto)
// //reject("no entregado a tiempo")
// desarrollo
//   .then((proyecto)=> console.log(proyecto))
//   . catch ((error) => console.log(error)) 
//   .finally(()=> console.log("promesa finalizada"))  

  
  

//Con esto termina la promesa, tanto si es resolve(satisfactorio) o rechazado(reject)



let compras = "mercancia";

function hacerLaCompra() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      compras += "mercancia";
      console.log(compras);
      resolve();
    }, 2000);
  });

  hacerLaCompra()
    .then(() => hacerLaCompra())
   
    .catch((error) => console.log(error))
    .finally(()=> console.log("promesa finalizada"))
}

//MUY CONFUSO EL USO Y LA UTILIDAD DE LAS PROMESAS  
  




