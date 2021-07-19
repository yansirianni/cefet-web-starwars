// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

import { play } from './music.js';
import { numeroParaRomano, romanoParaNumero } from './roman.js';
import { restartAnimation } from './restart-animation.js';

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

films.results.sort((a, b) => {
    return a.episode_id - b.episode_id;
});

for (let film of films.results){
    filmsListEl.innerHTML += `<li>Episode ${numeroParaRomano(film.episode_id).padEnd(3, ' ')} - ${film.title}</li>`;
}

//Exercicio 3

const filmsList = document.querySelectorAll('#filmes ul li');

function atualizaIntro(e){
        
    const episodeRoman = e.currentTarget.innerHTML.split(' ')[1];
    const episode = romanoParaNumero(episodeRoman);        

    const film = films.results.find(f => f.episode_id == episode);
            
    const introducaoEl = document.querySelector('pre.introducao');

    introducaoEl.innerHTML = `Episode ${episodeRoman} 
                              ${film.title} 

                              ${film.opening_crawl}`;
    
    restartAnimation(introducaoEl);
};

filmsList.forEach(filmEl => {
    filmEl.addEventListener('click', e => atualizaIntro(e)); 
});