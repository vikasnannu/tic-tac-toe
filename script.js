"use strict";

console.log("Welcome! to Tic Tac Toe");

let turnAudio = new Audio("ting.mp3");

let currTurn = "X";
let gameOver = false;


// Function to change the turn
const changeTurn = () => {
    return currTurn === "X" ? "O" : "X";
}

// Function to check win
const checkWin = () => {

    let boxtexts = document.getElementsByClassName("box-text");

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach((e) => {

        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText == boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " Wins";
            gameOver = true;
        }
    });

}

// Draw or Game End Logic 

const drawCheck = () => {

    let boxEmpty = document.getElementsByClassName("box-text");
    let temp = true;

    for (let i = 0; i < boxEmpty.length; i++) {
        if (boxEmpty[i].innerText === "") {
            temp = false;
        }
    }

    if (temp === true) {
        document.querySelector(".info").style.fontSize = "5.5rem";
        document.querySelector(".info").innerText = "It's A Draw 🤡";
        document.querySelector(".board-container").style.backgroundColor = "#8d89a6";
    }
}


// Game Logic 

let boxes = document.getElementsByClassName('box');

Array.from(boxes).forEach(element => {

    let boxText = element.querySelector('.box-text');

    element.addEventListener('click', () => {
        if (boxText.innerText === "") {
            boxText.innerText = currTurn;
            currTurn = changeTurn();
            turnAudio.play();
            checkWin();
            if (!gameOver) {
                document.querySelector(".info").innerText = currTurn + "'s" + " Turn";
                drawCheck();
            }
            if (gameOver) {
                document.querySelector(".board-container").style.backgroundColor = "#91f5ad";
            }
        }
    });

});

// Reset Button Logic
const reset = document.getElementById('reset');

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.box-text');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    currTurn = "X";
    gameOver = false;
    document.querySelector(".info").innerText = currTurn + "'s" + " Turn";
    document.querySelector(".board-container").style.backgroundColor = "#f2d5f8";
});