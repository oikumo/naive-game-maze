import { test, assertions } from 'naive-tests'
import { Player } from '../../src/player/player.mjs'
const { sameArrayElementsOnly } = assertions

test('create player', () => {
    const player = new Player()
    const position = new Float32Array(3)
    const direction = [0.0, 0.0, 1.0]
    sameArrayElementsOnly(position, player.position.values)
    sameArrayElementsOnly(direction, player.direction.values)
})