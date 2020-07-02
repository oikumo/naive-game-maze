import { test, assertions } from 'naive-tests'
import { RenderTexture } from 'naive-3d'
import { Game } from '../../src/game/game.mjs'
import { Lighting } from '../../src/common/lighting/lighting.mjs'
import { red, white } from '../../src/common/colors.mjs'
import { Renderer } from '../../src/game/renderer.mjs'
const { equals, areNotUndefinedOrNull, sameArrayElements } = assertions

test('game create', () => {
    const bytesPerPixel = 4
    const renderTexture = new RenderTexture(1 * bytesPerPixel)
    const lighting = new Lighting(red)
    const renderer = new Renderer(renderTexture, white)
    const game = new Game(renderer, lighting)
    areNotUndefinedOrNull(game)
    sameArrayElements(renderTexture, game.renderer.renderTexture)
    equals(red, game.lighting.ambientColor)
})

test('game step', () => {
    const bytesPerPixel = 4
    const renderTexture = new RenderTexture(1 * bytesPerPixel)
    const lighting = new Lighting(red)
    const renderer = new Renderer(renderTexture, white)
    const game = new Game(renderer, lighting)
    game.step()
})