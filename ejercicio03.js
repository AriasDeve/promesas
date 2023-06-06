//TODO Funcion basada en promesas
let request = require('request')

//* Esta función retorna una promesa... then() catch() finally()
//* La clase Promise requiere de un executor(resolver, rechazada)
    //! callback => funcion que retorna un valor
function loadPage(url){
  return new Promise(function(resolve, reject){
    request(url, function(error, response){
      if(error) return reject(error)
      resolve(response)
    })
  })
}

let promesa = loadPage('https://google.com');

  //? Nos devuelve => Promise { <pending> }
  //? console.log(promesa)

promesa.then(function(){
  console.log("URL cargada con éxito")
}).catch(function(){
  console.log("Problemas al cargar la URL")
})
