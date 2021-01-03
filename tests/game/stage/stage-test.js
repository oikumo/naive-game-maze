import { test, assertions } from 'naive-tests'
import { Stage } from '../../../src/game/stage/stage.js'
const { sameArrayElementsOnly } = assertions

test('stage create', () => {
    const renderer = {};
    const playerInput = { setPlayer: () => { } }
    const stage = new Stage(renderer, playerInput);
    //stage.texture.fill(() => 1);
})