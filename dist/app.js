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
const url = 'https://swapi.dev/api/people/1/';
const display = document.getElementById('display');
const categories = document.getElementById('categories');
function pepole() {
    return __awaiter(this, void 0, void 0, function* () {
        const respons = yield fetch(url);
        const data = yield respons.json();
        display.innerHTML = data.results;
    });
}
function getPeople(pepole) {
    for (let i = 0; i < pepole.results.lenght; i++) {
        console.log(pepole, results.lenght);
    }
}
getPeople();
