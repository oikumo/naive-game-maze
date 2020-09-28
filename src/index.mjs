import { CanvasRenderer, RenderTexture } from "naive-3d";
import { Game } from "./game/game.mjs";
import { Lighting } from "./common/lighting/lighting.mjs";
import { white } from "./common/colors.mjs";
import { Renderer } from "./game/renderer.mjs";
import { tryCreateSceneFromJson } from "./world/scene.mjs";
import { World } from "./world/world.mjs";

const scene001 = `
{
    "entities": [
        {
            "id": "one",
            "position": [0.0,0.0,0.0],
            "rotation": [0.0,0.0,0.0],
            "scale": [1.0,1.0,1.0],
            "mesh" : [
                {
                    "type": "sprite",
                    "texture": "checker"
                }
            ]
        }
    ]
}`;

const interval = 5;
const canvas = document.getElementById("canvas");
const canvasRender = new CanvasRenderer(canvas);
const renderTexture = new RenderTexture(canvasRender.imageSize());
const lighting = new Lighting(white, white);
const renderer = new Renderer(canvasRender, renderTexture);
const scene = tryCreateSceneFromJson(scene001);
const world = new World();
world.loadScene(scene);
const game = new Game(renderer, lighting, world);
const loop = game.step.bind(game);
setInterval(loop, interval);
