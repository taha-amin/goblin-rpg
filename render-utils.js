export function renderEnemy(enemyData) {

    //create elements for div and p tags
    const enemyEl = document.createElement('div');
    const emojiEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    enemyEl.classList.add('enemy');

    nameEl.textContent = enemyData.name;
    hpEl.id = `enemy-hp-${enemyData.id}`;
    hpEl.textContent = enemyData.hp;

    emojiEl.id = `enemy-face-${enemyData.id}`;

    //if enemy hp is above 0, show enemy with emoji. IF NOT show 'dead' emoji
    emojiEl.textContent = enemyData.hp > 0 ? '👹' : '☠️';

    //if enemy hp is below 0, make enemyEl 'dead'
    if (enemyData.hp < 0) {
        enemyEl.classList.add('dead');
    }

    enemyEl.append(nameEl, emojiEl, hpEl);

    return enemyEl;
}