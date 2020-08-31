const Renderer = function (canvas, renderTex) {
    this.canvas = canvas
    this.renderTex = renderTex
}

Renderer.prototype.paint = function (brush) {
    brush(this.renderTex.texture)
}

Renderer.prototype.draw = function () {
    this.canvas.draw(this.renderTex.buf8)
}

Renderer.prototype.clear = function (color) {
    this.renderTex.clear(color)
}

export {
    Renderer
}