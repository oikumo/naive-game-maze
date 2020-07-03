import { test, assertions } from 'naive-tests'
import { Entity } from '../../src/world/entity.mjs'
const { areNotUndefinedOrNull, sameArrayElementsOnly } = assertions

test('entity create', () => {
    const entity = new Entity()
    areNotUndefinedOrNull(entity)
    const position = [0, 0, 0]
    const forward = [0, 0, 1]
    sameArrayElementsOnly(position, entity.position.values)
    sameArrayElementsOnly(forward, entity.direction.values)
})
