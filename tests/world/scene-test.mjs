import { test, assertions } from "naive-tests";
import { tryCreateSceneFromJson } from "../../src/world/scene.mjs";
const { equals } = assertions;

test("scene create from json failed", () => {
  const scene = tryCreateSceneFromJson("{");
  equals(null, scene);
});

test("scene create from json missing required properties", () => {
  const json = `{}`;
  const scene = tryCreateSceneFromJson(json);
  equals(null, scene);
});

test("scene create from json", () => {
  const json = `
{
  "entities": [
    {
        "id": "one",
        "position": [0.0,0.0,0.0],
        "rotation": [0.0,0.0,0.0],
        "scale": [0.0,0.0,0.0],
        "scripts": [
          {
            "npc-seek-near-player": {
              "properties-override": {
                "range": 1.0,
                "speed": 2.0                                            
              },
              "active": true                    
            }
          }
        ], 
        "mesh": [
          {
            "type": "square"               
          },
          {
            "type": "shape-2d",
            "id": "surface1",
            "source":  "shapes-maze.assets"
          }
        ]
    },
    {
        "id": "two",
        "position": [1.0,1.0,0.0]
    }
  ]
}`;
  const scene = tryCreateSceneFromJson(json);
  const one = scene.entities[0];
  equals(one.id, "one");
});

test("scene draw", () => {
  const scene = tryCreateSceneFromJson('{"entities": []}');
  const texture = new Uint32Array([0, 0, 0, 0]);
  scene.draw(texture);
});

test("scene serialized", () => {
});
