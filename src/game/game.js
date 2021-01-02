import { Stage } from './stage/stage.js';

const Game = function (renderer, lighting, player) {
  this.renderer = renderer;
  this.lighting = lighting;
  this.stage = new Stage(player);
};

Game.prototype.step = function () {
  this.renderer.clear(this.lighting.ambientColor);
  this.stage.tick(this.renderer);
  this.renderer.draw();
};

export {
  Game,
};
