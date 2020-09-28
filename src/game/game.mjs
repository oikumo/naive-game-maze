const Game = function (renderer, lighting, world) {
  this.renderer = renderer;
  this.lighting = lighting;
  this.world = world;
};

Game.prototype.step = function () {
  this.renderer.clear(this.lighting.ambientColor);
  this.world.draw(this.renderer);
  this.renderer.draw();
};

export {
  Game,
};
