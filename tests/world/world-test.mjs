import { test, assertions } from 'naive-tests'
import { World } from '../../src/world/world.mjs'
import { Entity } from '../../src/world/entity.mjs'
const { equals, areNotUndefinedOrNull } = assertions

test('world create', () => {
    const world = new World()
    areNotUndefinedOrNull(world)
})

test('world add entity', () => {
    const world = new World()
    const entity = new Entity()
    world.addEntity(entity)
    areNotUndefinedOrNull(world)
    equals(entity, world.entities[0])
})