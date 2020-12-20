import { Game } from "./game/game.mjs";
import { Lighting } from "./common/lighting/lighting.mjs";
import { white, black } from "./common/colors.mjs";
import { HtmlRenderer } from "./renderers/html-renderer.mjs";

const interval = 5;
const renderer = new HtmlRenderer(document.getElementById('canvas'));
const lighting = new Lighting(black, white);

const game = new Game(renderer, lighting);
const loop = game.step.bind(game);

setInterval(loop, interval);