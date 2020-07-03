import { test, assertions } from 'naive-tests'
import { Entity } from '../../src/world/entity.mjs'
const { equals, areNotUndefinedOrNull, sameArrayElementsOnly } = assertions

test('entity create', () => {
    const entity = new Entity()
    areNotUndefinedOrNull(entity)
    const position = [0, 0, 0]
    sameArrayElementsOnly(position, entity.position.values)
})
