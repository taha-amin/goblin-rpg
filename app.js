// import functions and grab DOM elements

import { renderGoblin } from './render-utils.js';

const defeatedNumberEl = document.querySelector('#defeated-number');
const playerHPel = document.querySelector('#player-health');
const playerImgEl = document.querySelector('#player-img');
const form = document.querySelector('form');
const goblinListEl = document.querySelector('.goblins');

// let state
let playerHP = 10;
let goblinsDefeatedCount = 0;
let currentId = 3;
let goblins = [
    { id: 1, name: 'Wretched Ogre', hp: 3 },
    { id: 2, name: 'Foul Mutant', hp: 2 },
    { id: 3, name: 'Rotting Behemoth', hp: 6 },
];

// set event listeners
// new goblin form
form.addEventListener('submit', (e) => {
    e.preventDefault;

    const data = new FormData(form);

    const goblinName = data.get('goblin-name');

    const newGoblin = {
        id: currentId,
        name: goblinName,
        hp: Math.ceil(Math.random() * 5),
    };
    currentId++;

  //Add obj to array of goblins in state
    goblins.push(newGoblin);

    //call display func
    displayGoblins();
});

function goblinClickHandler(goblinData) {
    if (goblinData.hp <= 0) return;

    if (Math.random() < 0.33) {
        goblinData.hp--;
        alert('You hit ' + goblinData.name);
    } else {
        alert('You tried to hit ' + goblinData.name + ' but you missed');
    }

  //IF-ELSE to decrement player HP
    if (Math.random() < 0.5) {
        playerHP--;
        alert(goblinData.name + ' hit you!');
    } else {
        alert(goblinData.name + ' tried to hit you but missed!');
    }

    if (goblinData.hp === 0) {
        goblinsDefeatedCount++;
    }

    if (playerHP === 0) {
        playerImgEl.classList.add('game-over');
        alert('ITS GAME OVER MAN!!!');
    }

  //update dom with new enemy, player, and defeated enemy state
    playerHPel.textContent = playerHP;
    defeatedNumberEl.textContent = goblinsDefeatedCount;

    const hpEl = document.getElementById(`enemy-hp-${goblinData.id}`);
    hpEl.textContent = goblinData.hp < 0 ? 0 : goblinData.hp;

    const faceEl = document.getElementById(`enemy-face-${goblinData.id}`);
    faceEl.textContent = goblinData.hp > 0 ? '👹' : '☠️';
}

function displayGoblins() {
  //clear out the dom
    goblinListEl.textContent = '';

  //for loop to go through enemies
    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

        goblinEl.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });

        goblinListEl.append(goblinEl);
    }
}

displayGoblins();