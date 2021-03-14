import { vector3Zero } from "../../common/math/vector/vector3.js";

// States
const primaryActionEnabled = function () {
    return 'primaryActionEnabled';
};
const primaryActionDisabled = function () {
    return 'primaryActionDisabled';
};

export function PlayerController(entity) {
    this.entity = entity;
    this.position = vector3Zero();
    this.actionState = primaryActionDisabled;
}

PlayerController.prototype.update = function () {
    return this.actionState();
}

PlayerController.prototype.moveTo = function (position) {
    this.position = position;
    this.entity.moveTo(position);
}

PlayerController.prototype.ActionPrimaryEnable = function () {
    this.actionState = primaryActionEnabled;
}

PlayerController.prototype.ActionPrimaryDisable = function () {
    this.actionState = primaryActionDisabled;
}
