const conteudo = document.getElementById('conteudo');

const getAPIData = (url) => {
  fetch (url)
    .then ( response => response.json())
    .then ( data => {
      data.forEach( (el, i) => {
        let h1;
        h1 = document.createElement('h1');
        h1.id = `${el.id}_${i}`;
        h1.innerText = el.id
        conteudo.appendChild(h1);
      });
    })
    .catch( _ => { throw _});
}

let parametro;
parametro = 'casa'
const url = `https://us-central1-api-aula-d6451.cloudfunctions.net/app/${parametro}`;

getAPIData(url)