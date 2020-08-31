import { test, assertions } from 'naive-tests'
import { RenderTexture } from 'naive-3d'
import { Renderer } from '../../src/game/renderer.mjs'
import { red, white, blue, black } from '../../src/common/colors.mjs'
const { sameArrayElements, equals } = assertions

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

test('renderer draw and paint', () => {
    const pixelsSize = 4
    const bytesPerPixel = 4
    const renderTexture = new RenderTexture(pixelsSize * bytesPerPixel)

    const canvas = {
        buffer: [],
        draw: function (buffer) {
            this.buffer = buffer
        }
    }

    const renderer = new Renderer(canvas, renderTexture)

    renderTexture.texture[0] = white
    renderTexture.texture[1] = red
    renderTexture.texture[2] = blue
    renderTexture.texture[3] = black

    const texture = renderTexture.texture
    texture[0] = red
    texture[1] = red
    texture[2] = red
    texture[3] = red

    renderer.draw()

    for (let i = 0; i < canvas.buffer.length; i += 4) {
        equals(255, canvas.buffer[i + 0])
        equals(0, canvas.buffer[i + 1])
        equals(0, canvas.buffer[i + 2])
        equals(255, canvas.buffer[i + 3])
    }
})