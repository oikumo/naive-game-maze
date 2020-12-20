import { Stage } from "./stage/stage.mjs";

const Game = function (renderer, lighting) {
  this.renderer = renderer;
  this.lighting = lighting;
  this.stage = new Stage();
};

Game.prototype.step = function () {
  this.renderer.clear(this.lighting.ambientColor);
  this.stage.tick(this.renderer);
  this.renderer.draw();
};

export {
  Game,
};
