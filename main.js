const areaWidth = 30
const areaHeight = 30
const scale = 20
const speed = 2000
let food = { x: 0 ,
    y: 0}
   

const area = document.getElementsByClassName('area')[0];
area.style.width = `${areaWidth * scale}px`;
area.style.height = `${areaHeight * scale}px`;
let direction = 'left'
let positions = [
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 3, y: 1 },
    { x: 4, y: 1 }
]
console.log(positions)
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowdDown':
            changeDirection('down');
            break;
        case 'ArrowUp':
            changeDirection('up');
            break;
        case 'ArroLeft':
            changeDirection('left');
            break;
        case 'ArrowRight':
            changeDirection('right');
            break;
    }
});
function changeDirection(value) {
    if (direction === 'up' || direction === 'down') { if (value === 'right' || value === 'left') direction = value }
    else if (direction === 'right' || direction === 'left') { if (value === 'up' || value === 'down') direction = value }
}

function generateFood() {
     food = {
        x: Math.floor(Math.random() * areaWidth),
    y: Math.floor(Math.random() * areaHeight)
    }
}

function goLeft() {
    let newPositions = [];
    newPositions.push ({
       y: positions[0].y,
        x: positions[0].x === 0 ? areaWidth-1 : positions[0].x- 1,
    })
    
    for (i = 0; i < positions.length - 1; i++) {
        newPositions.push(positions[i])
    }
    positions = newPositions
}
setInterval(() => {
    switch (direction) {
        case 'right':
            goRight();
            break;
        case 'left':
            goLeft();
            break;
        case 'up':
            goLeft();
            break;
        case 'down':
            goLeft();
            break;
    }
    const snakeHtml = positions
        .map((position) => `<div class="snake" style="width : ${scale}px; height : ${scale}px; top: ${position.y * scale}px; left: ${position.x * scale}px;"></div> `)
        .join('');

    const foodHtml = `<div class="food" style="width : ${scale}px; height : ${scale}px; top: ${food.y * scale}px; left: ${food.x * scale}px;"></div> `;

    area.innerHTML = snakeHtml + foodHtml
    console.log(positions)

}, speed);

