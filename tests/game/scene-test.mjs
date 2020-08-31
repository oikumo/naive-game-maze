import { test, assertions } from 'naive-tests'
import { Scene } from '../../src/game/scene.mjs'
const { equals } = assertions

test('scene create', () => {
    const scene = new Scene()
    equals(true, true)
})

test('scene draw', () => {
    const scene = new Scene()
    const texture = new Uint32Array([0, 0, 0, 0])
    scene.draw(texture)
})