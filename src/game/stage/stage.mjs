import { Texture } from "naive-3d";

const Stage = function () {
  this.texture = new Texture(100, 100);
  this.texture.fill(() => 0xFF00FF00);
  this.player = 0;
};

Stage.prototype.tick = function (renderer) {
  this.player += .1;
  for (let i = 0; i < 5; i++) {
    this.texture.paintTo(renderer.tex(), renderer.texWidth(), this.player, i * 150);
  }
};

export {
  Stage,
};
