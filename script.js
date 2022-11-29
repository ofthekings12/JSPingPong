// Update Loop (updates position and logic of all the pieces in the game)
import Ball from './Ball.js';

const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))

let lastTime
function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime;
    // Update Code
    // ball.update(delta)
  }
  
  lastTime = time;
  window.requestAnimationFrame(update)
}

document.addEventListener("mousemove", e => {
  playerPaddle.position = (e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update)


