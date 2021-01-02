import { vector3Forward, vector3Zero } from '../../common/math/vector/vector3.js'

export function Player() {
    this.position = vector3Zero();
    this.direction = vector3Forward();
}

Player.prototype.moveTo = function (target) {
    this.position = target;
}