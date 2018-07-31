const height = screen.height + "px"
document.getElementById("page").style.height = height

const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const square3 = document.getElementById("square3");
const square4 = document.getElementById("square4");
const square5 = document.getElementById("square5");
const square6 = document.getElementById("square6");
const square7 = document.getElementById("square7");
const square8 = document.getElementById("square8");
const square9 = document.getElementById("square9");
const squares = [square1, square2, square3, square4, square5, square6, square7, square8, square9];

const x = '<div><h1>X</h1></div>';
const o = '<div><h1>O</h1></div>';

const row1 = [square1, square2, square3];
const row2 = [square4, square5, square6];
const row3 = [square7, square8, square9];
const col1 = [square1, square4, square7];
const col2 = [square2, square5, square8];
const col3 = [square3, square6, square9];
const diagonal1 = [square1, square5, square9];
const diagonal2 = [square3, square5, square7];

let playerX = true;

function winLine(row) {
    const rowX = row.filter(function (square) {
        return square.getAttribute('name') === "x";
    })
    const rowO = row.filter(function (square) {
        return square.getAttribute('name') === "o";
    })
    if (rowX.length === 3) {
        document.getElementById('winner').innerHTML = '<h1>X WINS!<h1>'
    } else if (rowO.length === 3) {
        document.getElementById('winner').innerHTML = '<h1>O WINS!<h1>'
    }
}

function playersMove(square) {
    if (playerX && !square.hasAttribute('name')) {
        square.innerHTML = x;
        square.setAttribute('name', 'x');
        playerX = false;
    } else if (!playerX && !square.hasAttribute('name')) {
        square.innerHTML = o;
        square.setAttribute('name', 'o');
        playerX = true;
    }
}

square1.onclick = function () {
    playersMove(square1);
    winLine(row1);
    winLine(col1);
    winLine(diagonal1);
}

square2.onclick = function () {
    playersMove(square2)
    winLine(row1);
    winLine(col2);
}

square3.onclick = function () {
    playersMove(square3)
    winLine(row1);
    winLine(col3);
    winLine(diagonal2);
}

square4.onclick = function () {
    playersMove(square4)
    winLine(row2);
    winLine(col1);
}

square5.onclick = function () {
    playersMove(square5)
    winLine(row2);
    winLine(col2);
    winLine(diagonal1);
    winLine(diagonal2);
}

square6.onclick = function () {
    playersMove(square6)
    winLine(row2);
    winLine(col3);
}

square7.onclick = function () {
    playersMove(square7)
    winLine(row3);
    winLine(col1);
    winLine(diagonal2);
}

square8.onclick = function () {
    playersMove(square8)
    winLine(row3);
    winLine(col2);
}

square9.onclick = function () {
    playersMove(square9)
    winLine(row3);
    winLine(col3);
    winLine(diagonal1);
}

document.getElementById("clear").onclick = function () {
    squares.forEach(function (square) {
        square.innerHTML = "";
        square.removeAttribute("name");
        document.getElementById("winner").innerHTML = ""
    })
}