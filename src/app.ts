const urlPeople ='https://swapi.dev/api/people/';
const urlStarships ='https://swapi.dev/api/starships/';

const people = document.getElementById('people') as HTMLElement;
const starships = document.getElementById('starships') as HTMLElement;
const showobject = document.getElementById('display') as HTMLElement;
let listPeople = document.getElementById('ul-people') as HTMLElement;
let liststarships = document.getElementById('ul-starships') as HTMLElement;

type characters = {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: string[],
    species: string[],
    vehicles: string[],
    starships: string[],
    created: string,
    edited: string,
    url: string
};

let arrPeople: characters[]=[];

//     let arrStarship[];

async function getPepole(){
    const respons = await fetch(urlPeople);
    const data = await respons.json();
    let person: characters;
    for (person of data.results) {
            let point = document.createElement('li');
            point.innerHTML = person.name;
            listPeople.append(point);
            arrPeople.push(person);
            // console.log(person);
            point.addEventListener('click', function(event){
                event.preventDefault;
                let found = arrPeople.find(p => this.innerText===p.name);
                console.log(found);
            });
            
        }
}

getPepole();

async function getStarships() {
    const respons = await fetch(urlStarships);
    const data = await respons.json();

for (const starships of data.results) {
    let point = document.createElement('li');
    point.innerHTML = starships.name;
    liststarships.append(point)
    point.addEventListener('click', (event) =>{
        event.preventDefault();

    })
}
}

getStarships();
