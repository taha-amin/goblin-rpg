// import functions and grab DOM elements

import { renderEnemy } from './render-utils.js';

const defeatedNumberEl = document.querySelector('#defeated-number');
const playerHPel = document.querySelector('#player-health');
const playerImgEl = document.querySelector('#player-img');
const form = document.querySelector('form');
const enemyListEl = document.querySelector('.enemies');

// let state
let playerHP = 10;
let enemiesDefeatedCount = 0;
let currentId = 3;
let enemies = [
    { id: 1, name: 'Wretched Ogre', hp: 3 },
    { id: 2, name: 'Foul Mutant', hp: 2 },
    { id: 3, name: 'Rotting Behemoth', hp: 6 },
];

// set event listeners
// new goblin form
form.addEventListener('submit', (e) => {
    e.preventDefault;

    const data = new FormData(form);

    const enemyName = data.get('enemy-name');

    const newEnemy = {
        id: currentId,
        name: enemyName,
        hp: Math.ceil(Math.random() * 5),
    };
    currentId++;

  //Add obj to array of goblins in state
    enemies.push(newEnemy);
});



  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
