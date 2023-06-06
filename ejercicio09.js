async function showGitHubPersonal(){
  //* fectch devuelve una promesa
  let response = await fetch('https://api.github.com/users/AriasDeve/repos')
  //* json() retorna una promesa
  let listRepos = await response.json();
  console.log(listRepos);
}

//showGitHubPersonal();

function getRepos(){
  fetch('https://api.github.com/users/AriasDeve/repos')
    .then(respuesta => respuesta.json())
    .then(datos => {
      console.log(datos)
    })
}
getRepos();