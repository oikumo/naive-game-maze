import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
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
  const scenePath = path.join(
    fileURLToPath(import.meta.url),
    "../../../",
    "tests-resources/world/scene-sample.json",
  );
  const json = fs.readFileSync(scenePath);
  const scene = tryCreateSceneFromJson(json);
  const one = scene.entities[0];
  equals(one.id, "one");
});
