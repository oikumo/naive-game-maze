const Scene = function () {
}

const noise = (texture) => {
    for (let i = texture.length - 1; i >= 0; --i) {
        texture[i] = Math.random() > .5 ? 0xFF00FF00 : 0xFF0000FF
    }
}

Scene.prototype.draw = function (texture) {
    noise(texture)
}

export {
    Scene
}