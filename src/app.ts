const urlPeople ='https://swapi.dev/api/people/';
const urlStarships ='https://swapi.dev/api/starships/';
const urlPeopleSearch = 'https://swapi.dev/api/people/?search=';

const people = document.getElementById('people') as HTMLElement;
const starships = document.getElementById('starships') as HTMLElement;
const showobject = document.getElementById('display') as HTMLElement;
let listPeople = document.getElementById('ul-people') as HTMLElement;
let liststarships = document.getElementById('ul-starships') as HTMLElement;
const inPutElement = document.querySelector('input') as HTMLInputElement;
const buttonElement = document.querySelector('button') as HTMLButtonElement;
const showSearch = document.getElementById('people-search') as HTMLElement;


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

//let arrStarship[];

async function getPepole(){
    const respons = await fetch(urlPeople);
    
    const data = await respons.json();
    let person: characters;
    for (person of data.results) {
            let point = document.createElement('li');
            point.innerHTML = person.name;
            listPeople.append(point);
            arrPeople.push(person);
            point.addEventListener('click', function(event){
                event.preventDefault;
                let found = arrPeople.find(p => this.innerText===p.name);
                if(found != undefined){
                    showobject.innerHTML = "";
                    let name = document.createElement('p')
                    let height = document.createElement('p');
                    let mass = document.createElement('p');
                    name.innerHTML = found.name;
                    height.innerHTML = found.height;
                    mass.innerHTML = found.mass;
                    showobject.append('Name:', name);
                    showobject.append('Hight:', height);
                    showobject.append('Mass:', mass);
                }
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


buttonElement.addEventListener('click', async (event) =>{
    event.preventDefault();
    const response = await fetch(urlPeopleSearch + inPutElement.value);
    const data = await response.json();
    console.log(data.results);
    data.results.forEach((result: {
        height: string,
        name: string,
        mass: string,
        birth_year: string,
    }) => {
        const characterHTML = `
        
    <article class="char">
    <p>Name: ${result.name}</p>
    <p>Height: ${result.height}</p>
    <p>Weight: ${result.mass}</p>
    <p>Birthyear: ${result.birth_year}</p>
    </article>`;


    showobject.innerHTML =characterHTML;
    });
//}
});

    
