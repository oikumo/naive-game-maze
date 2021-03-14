import { Entity } from "../../entity/entity.js";
import { PlayerAvatar } from "../../player/player-avatar.js";
import { createTexture, createCheckerTexture } from "../../../engine/tex.js";
import { blue, green } from "../../../common/colors.js";

export function LevelSandbox() {
    this.player = null;
    this.radiusStep = 0;
}

LevelSandbox.prototype.load = function () {
    this.player = new Entity(new PlayerAvatar(50, 50));
    this.tex = createCheckerTexture(250, 250, blue, green);
}

LevelSandbox.prototype.update = function (deltaTime) {
}

LevelSandbox.prototype.draw = function (renderer) {
    this.tex.paintTo(renderer.tex(), renderer.texWidth(), 0, 0);
    this.player.draw(renderer);
}