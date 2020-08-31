const Game = function (renderer, lighting) {
    this.renderer = renderer
    this.lighting = lighting
}

const noise = (texture) => {
    for (let i = texture.length - 1; i >= 0; --i) {
        texture[i] = Math.random() > .5 ? 0xFF000000 : 0xFF0000FF
    }
}

Game.prototype.step = function () {
    this.renderer.clear(this.lighting.ambientColor)
    this.renderer.paint(noise)
    this.renderer.draw()
}

export {
    Game
}