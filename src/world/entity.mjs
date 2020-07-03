import { Vector3 } from '../common/vector.mjs'

const Entity = function () {
    this.position = Vector3.zero()
    this.direction = Vector3.forward()
}

export {
    Entity
}