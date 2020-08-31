import { CanvasRenderer, RenderTexture } from 'naive-3d'
import { Game } from './game/game.mjs'
import { Lighting } from './common/lighting/lighting.mjs'
import { white } from './common/colors.mjs'
import { Renderer } from './game/renderer.mjs'

const interval = 5
const canvas = document.getElementById("canvas")
const canvasRender = new CanvasRenderer(canvas)
const renderTexture = new RenderTexture(canvasRender.imageSize())
const lighting = new Lighting(white, white)
const renderer = new Renderer(canvasRender, renderTexture)
const game = new Game(renderer, lighting)
const loop = game.step.bind(game)
setInterval(loop, interval)