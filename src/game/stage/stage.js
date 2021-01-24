import { Entity } from "../entity/entity.js";
import { EntityController } from "../entity/entity-controller.js";
import { PlayerAvatar } from "../player/player-avatar.js";
import { Enemy2d } from "../geometry/complex/enemy2d-mesh.js";
import { blue } from "../../common/colors.js";
import { createTexture } from "../../engine/tex.js";

export function Stage(renderer, playerInput) {
  this.renderer = renderer;
  this.playerInput = playerInput;
}

Stage.prototype.start = function () {
  this.player = new Entity(new PlayerAvatar(50, 50));
  this.playerInput.setPlayer(this.player);

  const tmpTex = createTexture(250, 250, blue);
  this.enemy = new Entity(new Enemy2d(250, 250, tmpTex));
  this.enemyController = new EntityController(this.enemy);
  this.deltaTime = 0.1;
}

Stage.prototype.tick = function (renderer) {
  this.update(this.deltaTime);
  this.draw(renderer);
}

Stage.prototype.update = function () {
  const distance = this.enemy.position[0] - this.player.position[0];

  if (Math.abs(distance) >= 50) {
    this.enemyController.move();
  }
}

Stage.prototype.draw = function (renderer) {
  this.enemy.draw(renderer);

  //renderer.tex(), renderer.texWidth()

  this.player.draw(renderer);
}
