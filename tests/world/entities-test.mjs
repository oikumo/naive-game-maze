import { test, assertions } from 'naive-tests'
import { Entities } from '../../src/world/entities/entities.mjs'
const { areNotUndefinedOrNull, sameArrayElementsOnly } = assertions

test('entity create', () => {
    const entities = new Entities()
    areNotUndefinedOrNull(entities)
    const position = [0, 0, 0]
    const rotation = [0, 0, 90]
    const scale = [1, 1, 1]
    //const entityId = entities.addOne(position, rotation, scale)

})
