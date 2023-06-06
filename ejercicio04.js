//* setTimeout() nos permitirá dilatar/extender los tiempos de carga
let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Primer saludo")
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Segundo saludo")
});

//TODO => Ejecutando promesas en paralelo
//* PRUEBA 01 => Ejecutara la que tenga menor tiempo
  /*
p1.then((r)=>{
  console.log(r)
})
p2.then((r)=>{
  console.log(r)
})
  */

//* PRUEBA 02 => Ejecutar la p2. despues de p1 (SERIALIZADO)
  /*
p1.then((res1) =>{
  console.log(res1)
  p2.then((res2) =>{
    console.log(res2)
    console.log("Proceso concluido")
  })
});
  */

//* PRUEBA 03 => Ejecutar ambas promesas serializada una a la vez
Promise.all([p1, p2]).then((respuestas)=>{
  console.log(respuestas);
  console.log("Proceso concluido")
});