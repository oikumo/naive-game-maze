import { test, assertions } from 'naive-tests'
import { RenderTexture } from 'naive-3d'
import { Renderer } from '../../src/game/renderer.mjs'
import { red, white } from '../../src/common/colors.mjs'
const { sameArrayElements } = assertions

test('renderer create', () => {
    const bytesPerPixel = 4
    const renderTexture = new RenderTexture(1 * bytesPerPixel)
    const canvas = {}
    const renderer = new Renderer(canvas, renderTexture, 0)
    sameArrayElements(renderTexture, renderer.renderTex)
})

test('renderer clear', () => {
    const pixelsSize = 4
    const bytesPerPixel = 4
    const renderTexture = new RenderTexture(pixelsSize * bytesPerPixel)
    renderTexture.texture[0] = white
    renderTexture.texture[1] = red
    renderTexture.texture[2] = white
    renderTexture.texture[3] = red

    const canvas = {}
    const renderer = new Renderer(canvas, renderTexture)
    const texture = new Uint32Array([white, red, white, red])
    sameArrayElements(texture, renderer.renderTex.texture)

    renderer.clear(red)

    const expected = new Uint32Array([red, red, red, red])
    sameArrayElements(expected, renderer.renderTex.texture)
})