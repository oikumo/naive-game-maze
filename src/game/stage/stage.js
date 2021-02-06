import { Timer } from "../../engine/time/timer.js";

export function Stage(renderer, playerInput) {
  this.renderer = renderer;
  this.playerInput = playerInput;
  this.timer = new Timer();
  this.level = null;
}

Stage.prototype.loadLevel = function (level) {
  this.level = level;
  this.level.load();
}

Stage.prototype.start = function () {
  this.playerInput.setPlayer(this.level.player);
  this.timer.start();
}

Stage.prototype.tick = function (renderer) {
  this.timer.step();
  this.update();
  this.draw(renderer);
}

Stage.prototype.update = function () {
  const delta = this.timer.deltaSeconds();
  this.level.update(delta);
}

Stage.prototype.draw = function (renderer) {
  this.level.draw(renderer);
}
