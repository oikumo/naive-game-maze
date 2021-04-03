import { Game } from "./src/game/game.js";
import { Lighting } from "./src/common/lighting/lighting.js";
import { white, black, green } from "./src/common/colors.js";
import { HtmlRenderer } from "./src/engine/html-renderer.js";
import { HtmlCanvasCanvas } from './src/input/html-canvas-input.js'
import { PlayerInput } from "./src/game/player/player-input.js";

const fps = 60;
const intervalMilliSeconds = Math.ceil(1 / fps * 1000);

const canvas = document.getElementById('canvas');
const renderer = new HtmlRenderer(canvas);
const screenInput = new HtmlCanvasCanvas(canvas);
window.onresize = () => { screenInput.update(); };

const playerInput = new PlayerInput();
screenInput.register(playerInput);
const lighting = new Lighting(white, green);

const game = new Game(renderer, lighting, playerInput);

setInterval(() => game.step(), intervalMilliSeconds);