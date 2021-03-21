import { Game } from "./game/game.js";
import { Lighting } from "./common/lighting/lighting.js";
import { white, black } from "./common/colors.js";
import { HtmlRenderer } from "./engine/html-renderer.js";
import { HtmlCanvasCanvas } from './input/html-canvas-input.js'
import { PlayerInput } from "./game/player/player-input.js";

const fps = 60;
const intervalMilliSeconds = Math.ceil(1 / fps * 1000);

const canvas = document.getElementById('canvas');
const renderer = new HtmlRenderer(canvas);
const screenInput = new HtmlCanvasCanvas(canvas);
window.onresize = () => { screenInput.update(); };

const playerInput = new PlayerInput();
screenInput.register(playerInput);
const lighting = new Lighting(white, black);

const game = new Game(renderer, lighting, playerInput);

setInterval(() => game.step(), intervalMilliSeconds);