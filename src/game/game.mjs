const Game = function (renderer, lighting, scene) {
    this.renderer = renderer
    this.lighting = lighting
    this.scene = scene
}

Game.prototype.step = function () {
    this.renderer.clear(this.lighting.ambientColor)
    const texture = this.renderer.getTexture()
    this.scene.draw(texture)
    this.renderer.draw()
}

export {
    Game
}