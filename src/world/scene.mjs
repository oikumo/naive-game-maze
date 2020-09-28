import { Texture } from "naive-3d";

const Scene = function (entities) {
  this.entities = entities;

  const red = 0xFF0000FF;
  const green = 0xFF00FF00;
  this.texture = new Texture(100, 100);
  this.texture.fill((x, y) => {
    const ratio = Math.floor(x / 10) + Math.floor(y / 10);
    return ratio % 2 == 0 ? red : green;
  });
};

Scene.prototype.draw = function (renderer) {
  const entities = this.entities;
  const tex = renderer.getTexture();
  const width = renderer.canvasWidth();

  let entity = [];
  for (let i = entities.length - 1; i >= 0; --i) {
    entity = entities[i];
    this.texture.paintTo(tex, width);
  }
};

Scene.prototype.serialized = function () {
  const serilized = {
    entities: this.entities,
  };
  return JSON.stringify(serilized);
};

Scene.create = function (sceneObj) {
  if (sceneObj.entities === undefined || sceneObj.entities === null) {
    return null;
  }

  const entities = sceneObj.entities;
  const scene = new Scene(entities);
  return scene;
};

const tryCreateSceneFromJson = (json) => {
  let sceneObj = tryParse(json);
  if (sceneObj === null) return null;
  return Scene.create(sceneObj);
};

export {
  tryCreateSceneFromJson,
};

const tryParse = (json) => {
  try {
    const o = JSON.parse(json);
    return o;
  } catch (err) {
    console.log(err);
    return null;
  }
};
