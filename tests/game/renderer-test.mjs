import { test, assertions } from 'naive-tests'
import { RenderTexture } from 'naive-3d'
import { Renderer } from '../../src/game/renderer.mjs'
import { red, white } from '../../src/common/colors.mjs'
const { sameArrayElements } = assertions

test('renderer create', () => {
    const bytesPerPixel = 4
    const renderTexture = new RenderTexture(1 * bytesPerPixel)
    const renderer = new Renderer(renderTexture)
    sameArrayElements(renderTexture, renderer.renderTexture)
})

test('renderer clear', () => {
    const pixelsSize = 4
    const bytesPerPixel = 4
    const renderTexture = new RenderTexture(pixelsSize * bytesPerPixel)
    renderTexture.texture[0] = white
    renderTexture.texture[1] = red
    renderTexture.texture[2] = white
    renderTexture.texture[3] = red

    const renderer = new Renderer(renderTexture, red)
    const texture = new Uint32Array([white, red, white, red])
    sameArrayElements(texture, renderer.renderTexture.texture)
    renderer.clear()
    const clearColorArr = new Uint32Array([red, red, red, red])
    sameArrayElements(clearColorArr, renderer.renderTexture.texture)
})