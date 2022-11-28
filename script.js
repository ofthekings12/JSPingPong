// Update Loop (updates position and logic of all the pieces in the game)

import Ball from './Ball.js';

const ball = new Ball(dovument.getElementbyId("ball"))

let lastTime;

function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime;
    // Update Code
    ball.update(delta)
  }
  
  lastTime = time;
  window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)


