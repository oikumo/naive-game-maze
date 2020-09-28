const Renderer = function (canvas, renderTex) {
  const getTexture = () => {
    return renderTex.texture;
  };

  const canvasWidth = () => {
    return canvas.width;
  };

  const draw = () => {
    canvas.draw(renderTex.buf8);
  };

  const clear = (color) => {
    renderTex.clear(color);
  };

  return {
    canvasWidth,
    getTexture,
    draw,
    clear,
  };
};

export {
  Renderer,
};
