import { createTexture } from "../../engine/tex.js";
import { red } from "../../common/colors.js"

export function Stage() {
  this.texture = createTexture(100, 100, red);
  this.player = 0;
}

Stage.prototype.tick = function (renderer) {
  this.player += 0.1;
  for (let i = 0; i < 5; i++) {
    this.texture.paintTo(renderer.tex(), renderer.texWidth(), this.player, i * 150);
  }
}
