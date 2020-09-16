const World = function () {
  this.scene = {
    draw: function (texture) {
    },
  };
};

World.prototype.loadScene = function (scene) {
  this.scene = scene;
};

World.prototype.draw = function (texture) {
  this.scene.draw(texture);
};

export {
  World,
};
