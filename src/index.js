import { Game } from "./game/game.js";
import { Lighting } from "./common/lighting/lighting.js";
import { white, black } from "./common/colors.js";
import { HtmlRenderer } from "./engine/html-renderer.js";
import { registerScreenInputInCanvas } from './input/html-canvas-input.js'
import { Player } from "./game/player/player.js";
import { PlayerInput } from "./game/player/player-input.js";

const interval = 5;
const canvas = document.getElementById("canvas");
const renderer = new HtmlRenderer(canvas);
const lighting = new Lighting(black, white);

const player = new Player();
const playerInput = new PlayerInput(player);

registerScreenInputInCanvas(canvas, playerInput);

const game = new Game(renderer, lighting, player);
const loop = game.step.bind(game);

setInterval(loop, interval);