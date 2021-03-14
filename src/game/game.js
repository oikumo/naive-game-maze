import { Stage } from './stage/stage.js';
import { LevelSandbox } from './levels/levelSandbox/levelSanbox.js';

export function Game(renderer, lighting, playerInput) {
  this.renderer = renderer;
  this.lighting = lighting;
  this.playerInput = playerInput;
  this.stage = new Stage(this.renderer, this.playerInput);
  this.stage.loadLevel(new LevelSandbox());
  this.stage.start();
}

Game.prototype.step = function () {
  this.renderer.clear(this.lighting.backgroundColor);
  this.stage.tick(this.renderer);
  this.renderer.draw();
};