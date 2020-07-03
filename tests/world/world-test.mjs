import { test, assertions } from 'naive-tests'
import { World } from '../../src/world/world.mjs'
const { equals, areNotUndefinedOrNull } = assertions

test('world create', () => {
    const world = new World()
    areNotUndefinedOrNull(world)
})