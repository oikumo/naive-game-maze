export function Stage(renderer, playerInput) {
  this.renderer = renderer;
  this.playerInput = playerInput;
  this.level = null;
}

Stage.prototype.loadLevel = function (level) {
  this.level = level;
  this.level.load();
}

Stage.prototype.start = function () {
  this.playerInput.setPlayer(this.level.player);
  this.deltaTime = 0;
  this.lastTime = Date.now() / 1000.0;
}

Stage.prototype.tick = function (renderer) {
  const now = Date.now() / 1000.0;
  this.deltaTime = now - this.lastTime;
  this.lastTime = now;

  this.update();
  this.draw(renderer);
}

Stage.prototype.update = function () {
  this.level.update(this.deltaTime);
}

Stage.prototype.draw = function (renderer) {
  this.level.draw(renderer);
}
