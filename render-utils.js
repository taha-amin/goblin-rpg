export function renderGoblin(goblinData) {

    //create elements for div and p tags
    const goblinEl = document.createElement('div');
    const emojiEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    goblinEl.classList.add('goblin');

    nameEl.textContent = goblinData.name;
    hpEl.id = `goblin-hp-${goblinData.id}`;
    hpEl.textContent = goblinData.hp;

    emojiEl.id = `goblin-face-${goblinData.id}`;

    //if enemy hp is above 0, show enemy with emoji. IF NOT show 'dead' emoji
    emojiEl.textContent = goblinData.hp > 0 ? '👹' : '☠️';

    //if enemy hp is below 0, make enemyEl 'dead'
    if (goblinData.hp < 0) {
        goblinEl.classList.add('dead');
    }

    goblinEl.append(nameEl, emojiEl, hpEl);

    return goblinEl;
}