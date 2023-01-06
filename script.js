let color = 'black';
let msg = document.createElement('div');
let click = false;

function populateBoard(size) {
    //remove existing squares
    let box = document.querySelectorAll('.pix');
    box.forEach(element => {
        element.remove();
    });

    //then repopulate
    let board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplaterows = `repeat(${size},1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.setAttribute('class', 'pix');
        board.appendChild(square);
    }
}

function changeSize(size) {
    if (size > 0 && size < 101) {
        errorMsg('');
        populateBoard(size);
    }
    else {
        errorMsg('enter a number that will not crash the browse -_-');
    }
}

function resetBoard() {
    let box = document.querySelectorAll('.pix');
    box.forEach(element => {
        element.remove();
    });
    populateBoard(document.getElementById('size').value);
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function colorSquare() {
    if (click) {
        if (color === 'rainbow') {
            this.style.backgroundColor = getRandomColor();
        }
        else {
            this.style.backgroundColor = color;
        }
    }

}
function changeColor(choice) {
    color = choice;
}

function errorMsg(content) {
    msg.textContent = content;
    document.querySelector('.container ').appendChild(msg);
}

populateBoard(16);

document.body.addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON') {
        click = !click;
    }
});