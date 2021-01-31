import { Entity } from "../entity/entity.js";
import { EntityController } from "../entity/entity-controller.js";
import { PlayerAvatar } from "../player/player-avatar.js";
import { Enemy2d } from "../geometry/complex/enemy2d-mesh.js";
import { blue, green, red } from "../../common/colors.js";
import { createTexture } from "../../engine/tex.js";
import { drawCircleFillOnTexture } from "../geometry/primitives/circles/circle-fill-on-texture.js";

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
  this.deltaTime = 0;
  this.lastTime = Date.now() / 1000.0;
  this.radiusStep = 0;
}

Stage.prototype.tick = function (renderer) {
  const now = Date.now() / 1000.0;
  this.deltaTime = now - this.lastTime;
  this.lastTime = now;

  this.update(this.deltaTime);
  this.draw(renderer);

  this.radiusStep += (Math.PI * 0.1) * this.deltaTime;
}

Stage.prototype.update = function () {
  const distance = this.enemy.position[0] - this.player.position[0];

  if (Math.abs(distance) >= 50) {
    this.enemyController.move();
  }
}

Stage.prototype.draw = function (renderer) {

  const radius = Math.abs(Math.sin(this.radiusStep)) * 250.0;
  drawCircleFillOnTexture(renderer.tex(), renderer.texWidth(), 500, 500, radius, green);

  this.enemy.draw(renderer);
  this.player.draw(renderer);
}
