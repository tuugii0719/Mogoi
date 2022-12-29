const areaWidth = 10
const areaHeight = 10
const scale = 20
const speed = 100
let score = 0
let food = {x : 0, y : 0} 
let posLast={x:0,y:0}
   

const area = document.getElementsByClassName('area')[0];
area.style.width = `${areaWidth * scale}px`;
area.style.height = `${areaHeight * scale}px`;
let direction = 'right'
let positions = [
    { x: 2, y: 1 },
    { x: 1, y: 1 },
    { x: 0, y: 1 }
]
console.log(positions)
document.addEventListener('keydown', (event) => {
    console.log(event.key)
    switch (event.key) {
        case 'ArrowDown':
            changeDirection('down');
            break;
        case 'ArrowUp':
            changeDirection('up');
            break;
        case 'ArrowLeft':
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
    console.log(food.x)
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
function goUp() {
    let newPositions = [];
    newPositions.push ({
       y: positions[0].y === 0 ?  areaHeight - 1 : positions[0].y -1 ,
       x: positions[0].x ,
    })
    
    for (i = 0; i < positions.length - 1; i++) {
        newPositions.push(positions[i])
    }
    positions = newPositions
}
function goDown() {
    let newPositions = [];
    newPositions.push ({
       y: positions[0].y === areaHeight - 1  ? 0 : positions[0].y + 1 ,
       x: positions[0].x,
    })
    
    for (i = 0; i < positions.length - 1; i++) {
       
        newPositions.push(positions[i])
    }
    positions = newPositions
}
function goRight() {
    let newPositions = [];
    newPositions.push ({
       y: positions[0].y,
        x: positions[0].x === areaWidth - 1 ? 0 : positions[0].x + 1,
    })
    
    for (i = 0; i < positions.length - 1; i++) {
        newPositions.push(positions[i])
    }
    positions = newPositions
}

   

let play = setInterval(() => {
    switch (direction) {
        case 'right':
            goRight();
            break;
        case 'left':
            goLeft();
            break;
        case 'up':
            goUp();
            break;
        case 'down':
            goDown();
            break;
    }
    //hool ideh ued
    if(food.y===positions[0].y && food.x===positions[0].x) {
        score += 1,
        generateFood()
        console.log('hool idlee')
        positions.push(positions[positions.length])
    }
    //uuriiguu murguhuiig shalgah ni
    for (let index = 1; index < positions.length; index++) {
       if(positions[0].x===positions[index].x && positions[0].y===positions[index].y ){
        clearInterval(play)
       }
        
    }
    console.log(positions)
    const snakeHtml = positions
        .map((position) => `<div class="snake" style="width : ${scale}px; height : ${scale}px; top: ${position.y * scale}px; left: ${position.x * scale}px;"></div> `)
        .join('');

    const foodHtml = `<div class="food" style="width : ${scale}px; height : ${scale}px; top: ${food.y * scale}px; left: ${food.x * scale}px;"></div> `;

    area.innerHTML = foodHtml + snakeHtml
    console.log(direction)
    document.getElementsByClassName("score")[0].innerHTML=score
}, speed);


