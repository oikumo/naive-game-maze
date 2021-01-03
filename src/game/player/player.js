import { vector3Forward, vector3Zero } from '../../common/math/vector/vector3.js'
import { PlayerAvatar } from './player-avatar.js';

export function Player() {
    this.position = vector3Zero();
    this.direction = vector3Forward();
    this.avatar = new PlayerAvatar(50, 50);
}

Player.prototype.moveTo = function (target) {
    this.position = target;
}

Player.prototype.draw = function (renderer) {
    this.avatar.draw(this.position, renderer.tex(), renderer.texWidth());
}