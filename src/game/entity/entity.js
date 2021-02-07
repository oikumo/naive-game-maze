import { vector3Forward, vector3Zero } from '../../common/math/vector/vector3.js'

export function Entity(avatar) {
    this.position = vector3Zero();
    this.direction = vector3Forward();
    this.avatar = avatar;
}

Entity.prototype.moveTo = function (target) {
    this.position = target;
}

Entity.prototype.draw = function (renderer) {
    this.avatar.draw(this.position, renderer.tex(), renderer.texWidth());
}