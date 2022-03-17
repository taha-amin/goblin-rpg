export function renderGoblin(goblinData) {

    //create elements for div and p tags
    const enemyEl = document.createElement('div');
    const emojiEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    enemyEl.classList.add('enemy');

    nameEl.textContent = goblinData.name;
    hpEl.id = `enemy-hp-${goblinData.id}`;
    hpEl.textContent = goblinData.hp;

    emojiEl.id = `enemy-face-${goblinData.id}`;

    //if enemy hp is above 0, show enemy with emoji. IF NOT show 'dead' emoji
    emojiEl.textContent = enemyData.hp > 0 ? '👹' : '☠️';

    //if enemy hp is below 0, make enemyEl 'dead'
    if (goblinData.hp < 0) {
        enemyEl.classList.add('dead');
    }

    enemyEl.append(nameEl, emojiEl, hpEl);

    return enemyEl;
}