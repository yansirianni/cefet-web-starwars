// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

import { play } from './music.js';
import { numeroParaRomano } from './roman.js';

const API_ENDPOINT = 'https://swapi.dev/api'

//Exercicio 1

const musicConfiguration = {
    audioUrl: 'audio/tema-sw.mp3',
    coverImageUrl: 'imgs/logo.svg',
    title: 'Intro',
    artist: 'John Williams'
};

play(musicConfiguration, document.body);

//Exercicio 2

const response = await fetch(`${API_ENDPOINT}/films`);
const films = await response.json();

const filmsListEl = document.querySelector('#filmes ul');

filmsListEl.innerHTML = '';

for (const film of films.results){
    filmsListEl.innerHTML += `<li>Episode ${numeroParaRomano(film.episode_id).padEnd(3, ' ')} - ${film.title}</li>`;
}