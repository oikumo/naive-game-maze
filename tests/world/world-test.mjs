import { test, assertions } from "naive-tests";
import { World } from "../../src/world/world.mjs";
const { equals, areNotUndefinedOrNull } = assertions;

test("world create", () => {
  const world = new World();
  areNotUndefinedOrNull(world);
});

test("world load scene", () => {
  const world = new World();
  let texture = new Uint32Array([0, 0, 0, 0]);
  const scene = {
    draw: (texture) => {
      texture[0] = 1;
      texture[3] = 2;
    },
  };
  world.loadScene(scene);
  world.draw(texture);
  equals(1, texture[0]);
  equals(0, texture[1]);
  equals(0, texture[2]);
  equals(2, texture[3]);
});
