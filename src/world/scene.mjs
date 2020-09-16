const Scene = function (entities) {
  this.entities = entities;
};

Scene.prototype.draw = function (texture) {
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
  } catch {
    return null;
  }
};
