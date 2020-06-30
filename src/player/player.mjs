import { zero, forward } from '../common/vector.mjs'

const Player = function () {
    this.position = zero()
    this.direction = forward()
}

export {
    Player
}