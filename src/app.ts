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

type spacerockets = {
    name: string, 
    model: string, 
    manufacturer: string, 
    cost_in_credits: string, 
    length: string, 
    max_atmosphering_speed: string, 
    crew: string, 
    passengers: string, 
    cargo_capacity: string, 
    consumables: string, 
    hyperdrive_rating: string, 
    MGLT: string, 
    starship_class: string, 
    pilots: string[], 
    films: string[]
};

let arrPeople: characters[]=[];
let arrStarship: spacerockets[]=[];


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
                    let name = document.createElement('p');
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
};

getPepole();

async function getStarships() {
    const respons = await fetch(urlStarships);
    const data = await respons.json();
    let starships: spacerockets;
for (starships of data.results) {
    let point = document.createElement('li');
    point.innerHTML = starships.name; 
    liststarships.append(point)
    arrStarship.push(starships)
    point.addEventListener('click', function(event){
        event.preventDefault();
        let found = arrStarship.find(s => this.innerText===s.name);
        if(found != undefined){
            showobject.innerHTML = "";
            let name = document.createElement('p');
            let lenght = document.createElement('p');
            let crew = document.createElement('p');
            name.innerHTML = found.name;
            lenght.innerHTML = found.length;
            crew.innerHTML = found.max_atmosphering_speed;
            showobject.append('Name:', name);
            showobject.append('Lenght:', lenght);
            showobject.append('Crew:', crew);
        }
    });
}
};

getStarships();


buttonElement.addEventListener('click', async (event) =>{
    event.preventDefault();
    const response = await fetch(urlPeopleSearch + inPutElement.value);
    const data = await response.json();
    if(inPutElement.value === "")
     {
        alert('Pleas type somthing!');
   
    }else if(inPutElement.value === "count:[0]" ) {
       alert('Character not found')
    } else {
        data.results.forEach((result: {
            height: string,
            name: string,
            mass: string,
            birth_year: string,
        }) => {
            let article = document.createElement("article");
            article.setAttribute("class", "char-card");

            article.innerHTML = `
            
            
        <p>Name: ${result.name}</p>
        <p>Height: ${result.height}</p>
        <p>Weight: ${result.mass}</p>
        <p>Birthyear: ${result.birth_year}</p>
       `;
        
        
        showobject.append(article);
        });
    }
});

    
