let request = require('request-promise')

// Las promesas retornan OBJETOS
let promesa = request('https://www.google.com')

//TODO Se administran utilizando...
//! fullfiled = completada con exito
promesa.then(function(){
  console.log("URL cargada")
})

//! reject = rechazado
promesa.catch(function(error){
  console.log("Falló la consulta")
  console.log(error)
})

//! settled = finalizado
promesa.finally(function(){
  console.log("Promesa finalizada")
})