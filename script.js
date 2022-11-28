// Update Loop (updates position and logic of all the pieces in the game)

import Ball from './Ball.js';

const ball = new Ball(dovument.getElementbyId("ball"))

function update(time) {
  console.log(time);
  window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)


