import { createTexture } from "../../engine/tex.js";
import { red } from "../../common/colors.js"
import { vector3 } from "../../common/math/vector/vector3.js";

export function Stage(player) {
  this.texture = createTexture(100, 100, red);
  this.avatarDelta = vector3(this.texture.width * 0.5, this.texture.height * 0.5, 0);
  this.player = player;
}

Stage.prototype.tick = function (renderer) {
  this.texture.paintTo(renderer.tex(), renderer.texWidth(),
    this.player.position[0] - this.avatarDelta[0],
    this.player.position[1] - this.avatarDelta[1]);
}
