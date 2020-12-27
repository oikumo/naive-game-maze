import { Vector3 } from '../../common/vector.js'

const Player = function () {
    this.position = Vector3.zero()
    this.direction = Vector3.forward()
}

export {
    Player
}