"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const urlPeople = 'https://swapi.dev/api/people/';
const urlStarships = 'https://swapi.dev/api/starships/';
const people = document.getElementById('people');
const starships = document.getElementById('starships');
const showobject = document.getElementById('display');
let listPeople = document.getElementById('ul-people');
let liststarships = document.getElementById('ul-starships');
let arrPeople = [];
function getPepole() {
    return __awaiter(this, void 0, void 0, function* () {
        const respons = yield fetch(urlPeople);
        const data = yield respons.json();
        let person;
        for (person of data.results) {
            let point = document.createElement('li');
            point.innerHTML = person.name;
            listPeople.append(point);
            arrPeople.push(person);
            point.addEventListener('click', function (event) {
                event.preventDefault;
                let found = arrPeople.find(p => this.innerText === p.name);
                console.log(found);
            });
        }
    });
}
getPepole();
function getStarships() {
    return __awaiter(this, void 0, void 0, function* () {
        const respons = yield fetch(urlStarships);
        const data = yield respons.json();
        for (const starships of data.results) {
            let point = document.createElement('li');
            point.innerHTML = starships.name;
            liststarships.append(point);
            point.addEventListener('click', (event) => {
                event.preventDefault();
            });
        }
    });
}
getStarships();
