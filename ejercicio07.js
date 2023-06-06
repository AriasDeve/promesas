//TODO: Funciones asíncronas
async function sumar(valor1, valor2){
  //* el return construye y asume resolve para la promesa IMPLICITA
  return valor1 + valor2;
}

async function calcular(){
  //* setTimeout(callback, tiempo espera, resultado)
  return new Promise((resolve, reject) =>{
    setTimeout(resolve, 1000, 20)
  })
}

//* El resultado sera una promesa, con el valor 15
//* el estado pendiente no se muestra ya que se ejecuta INMEDIATAMENTE
console.log(sumar(5, 10))

//* Proceso pendiente(espera...)
console.log(calcular())

//? ¿Cómo vemos el valor que nos trae la promesa en la función calcular()?
calcular()
  .then((res) =>{
    console.log(res)
  })