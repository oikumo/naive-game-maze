const Game = function (renderer, lighting) {
    this.renderer = renderer
    this.lighting = lighting
}

Game.prototype.step = function () {
    this.renderer.clear()
}

export {
    Game
}