import { Stage } from './stage/stage.js';
import { Level000 } from './levels/level-000/level-000.js';

export function Game(renderer, lighting, playerInput) {
  this.renderer = renderer;
  this.lighting = lighting;
  this.playerInput = playerInput;
  this.stage = new Stage(this.renderer, this.playerInput);
  this.stage.loadLevel(new Level000());
  this.stage.start();
}

Game.prototype.step = function () {
  this.renderer.clear(this.lighting.backgroundColor);
  this.stage.tick(this.renderer);
  this.renderer.draw();
};