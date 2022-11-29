export default class Paddle {
  constructor(paddleElem) {
    this.paddleElem = paddleElem;
  }
  get position() {
    return parseFloat(
      getComputedStyle(this.ballElem).getPropertyValue("--position")
    );
  }

  set position(value) {
    this.ballElem.style.setProperty("--position", value);
  }
}
