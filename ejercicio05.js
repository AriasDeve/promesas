//TODO Encadenar promesas
function primeraPromesa(){
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, "Promesa 01")
  })
}

function segundaPromesa(valorEntrada){
  console.log(valorEntrada)
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, 500, "Promesa 02")
  })
}

//? ¿Cómo la promesa 01, pas información a la promesa 02?
//* VERSION BASICA
  /*
primeraPromesa()
  .then(segundaPromesa)
  .then((respuestas)=>{
    console.log(respuestas)
  })
  */

//* VERSION AVANZADA

//! 1. La promesa 02 debe recibir parámetros de entrada 
primeraPromesa()
  .then(segundaPromesa)
  .then((respuestas)=>{
    console.log(respuestas)
  })
