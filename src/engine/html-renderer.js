import { CanvasRenderer, RenderTexture } from "naive-3d";

function HtmlRenderer(canvas) {
  this.canvasRender = new CanvasRenderer(canvas);
  this.renderTex = new RenderTexture(this.canvasRender.imageSize());
}

HtmlRenderer.prototype.tex = function () {
  return this.renderTex.texture;
}

HtmlRenderer.prototype.texWidth = function () {
  return this.canvasRender.width;
}

HtmlRenderer.prototype.draw = function () {
  this.canvasRender.draw(this.renderTex.buf8);
}

HtmlRenderer.prototype.clear = function (color) {
  this.renderTex.clear(color);
}

export {
  HtmlRenderer
}