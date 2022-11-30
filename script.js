const gameBoard = document.querySelector("#game-board");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#score-text")
const resetBtn = document.querySelector("#reset-btn")
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "forestgreen"
const paddle1Color = "lightblue"
const paddle2Color = "red"
const paddleBorder = "black";
const ballColour = "yellow";
const ballBorderColour = "black";
const ballRadius = 12.5;
const paddleSpeed = 50;
let intervalId;
let ballSpeed = 1;
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
let ballXDirection = 0;
let ballYDirection = 0;
let player1Score = 0;
let player2Score = 0;
let paddle1 = {
  width: 25, 
  height:100,
  x: 0,
  y: 0,
}