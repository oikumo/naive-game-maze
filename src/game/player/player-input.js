import { vector3SetXY, vector3Zero } from "../../common/math/vector/vector3.js";

export function PlayerInput(player) {
    this.player = player;
    this.position = vector3Zero();
}

PlayerInput.prototype.onMove = function (x, y) {
    vector3SetXY(this.position, x, y);
    this.player.moveTo(this.position);
}

PlayerInput.prototype.onActionDown = function (x, y) {
    console.log("down", x, y);
}

PlayerInput.prototype.onActionUp = function (x, y) {
    console.log("up", x, y);
}