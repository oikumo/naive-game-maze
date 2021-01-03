import { Stage } from './stage/stage.js';

export function Game(renderer, lighting, playerInput) {
  this.renderer = renderer;
  this.lighting = lighting;
  this.playerInput = playerInput;
  this.stage = new Stage(this.renderer, this.playerInput);
}

Game.prototype.step = function () {
  this.renderer.clear(this.lighting.ambientColor);
  this.stage.tick(this.renderer);
  this.renderer.draw();
};