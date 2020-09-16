const Game = function (renderer, lighting, world) {
  this.renderer = renderer;
  this.lighting = lighting;
  this.world = world;
};

Game.prototype.step = function () {
  this.renderer.clear(this.lighting.ambientColor);
  const texture = this.renderer.getTexture();
  this.world.draw(texture);
  this.renderer.draw();
};

export {
  Game,
};
