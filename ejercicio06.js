//TODO Funciones tradicionales
  /*
function saludar(mensaje){
  return `Bienvenido ${nombre}`
}
function mostrarAmigos(){
  return ['Juan', 'Luis', 'Pedro']
}

let resultados01 = saludar('Piero')
let resultados02 = mostrarAmigos()

console.log(resultados01)       //* form 01
console.log(mostrarAmigos())    //* form 02
  */

//* Objeto
//* Función flecha / parámetro
const perfil = {
  'apellidos'     : 'Arias Tasayco',
  'nombres'       : 'Piero Alexander',
  'edad'          : 28,
  'estaCasado'    : false,
  'amigos'        : ['a', 'b', 'c'],
  'contacto'      : {
    'telefono'    : ['933303163'],
    'ciudad'      : 'Chincha',
    'casaPropia'  : true
  },
  'skill'         : function(){
    return "Yo se programar"
  }
}

console.log(perfil.skill())