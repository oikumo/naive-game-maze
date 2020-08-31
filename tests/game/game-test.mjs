import { test, assertions } from 'naive-tests'
import { RenderTexture } from 'naive-3d'
import { Game } from '../../src/game/game.mjs'
import { Lighting } from '../../src/common/lighting/lighting.mjs'
import { white } from '../../src/common/colors.mjs'
import { Renderer } from '../../src/game/renderer.mjs'
const { equals, areNotUndefinedOrNull, sameArrayElements } = assertions

test('game step', () => {
    const bytesPerPixel = 4
    const renderTexture = new RenderTexture(1 * bytesPerPixel)
    const lighting = new Lighting(white, white)
    const canvasRenderSpy = {
        calls: 0,
        draw: function (texture) {
            this.calls++
        }
    }
    const renderer = new Renderer(canvasRenderSpy, renderTexture, white)
    const game = new Game(renderer, lighting)
    game.step()
    game.step()
    equals(canvasRenderSpy.calls, 2)
})

test('game create', () => {
    const bytesPerPixel = 4
    const lighting = new Lighting(white, white)
    const canvas = { draw: function () { } }
    const renderTexture = new RenderTexture(bytesPerPixel)
    const renderer = new Renderer(canvas, renderTexture)
    const game = new Game(renderer, lighting)
    areNotUndefinedOrNull(game.lighting)
    areNotUndefinedOrNull(game.renderer)
})