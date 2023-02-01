const url ='https://swapi.dev/api/people/1/';

const display = document.getElementById('display') as HTMLElement;
const categories = document.getElementById('categories') as HTMLElement;

async function pepole() {
    const respons = await fetch(url);
    const data = await respons.json();
    display.innerHTML = data.results;
}

function getPeople(pepole) {
    for(let i = 0; i < pepole.results.lenght; i++){
        console.log(pepole,results.lenght);
    }
}
getPeople();