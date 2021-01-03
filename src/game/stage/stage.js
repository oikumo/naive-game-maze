import { Player } from "../player/player.js";

export function Stage(renderer, playerInput) {
  this.renderer = renderer;
  this.playerInput = playerInput;

  this.player = new Player();
  this.playerInput.setPlayer(this.player);
}

Stage.prototype.tick = function (renderer) {
  this.player.draw(renderer);
}
