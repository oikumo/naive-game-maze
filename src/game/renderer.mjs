const Renderer = function (renderTexture, clearColor) {
    this.renderTexture = renderTexture
    this.clearColor = clearColor
}

Renderer.prototype.clear = function () {
    this.renderTexture.clear(this.clearColor)
}

export {
    Renderer
}