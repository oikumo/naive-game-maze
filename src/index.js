import { Game } from "./game/game.js";
import { Lighting } from "./common/lighting/lighting.js";
import { white, black } from "./common/colors.js";
import { HtmlRenderer } from "./engine/html-renderer.js";

const interval = 5;
const renderer = new HtmlRenderer(document.getElementById("canvas"));
const lighting = new Lighting(black, white);

const game = new Game(renderer, lighting);
const loop = game.step.bind(game);

setInterval(loop, interval);