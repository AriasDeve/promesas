//* Operador AWAIT(esperar) funciona unicamente en funciones asíncronas
/*
  let promesa = new await Promise((resolve, reject) =>{
    setTimeout(resolve, 1000, 20)
  });

  promesa
  .then((res) => { console.log(res)})
*/

async function testPromesas(){
  let promesa01 = await new Promise((resolve, reject) =>{
    setTimeout(resolve, 1000, 20)
  });
  let promesa02 = await new Promise((resolve, reject) =>{
    setTimeout(resolve, 500, 25)
  });

  console.log(promesa01 + promesa02)
}

testPromesas()