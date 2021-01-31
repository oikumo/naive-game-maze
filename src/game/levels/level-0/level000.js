import { drawCircleFillOnTexture } from "../../../engine/geometry/primitives/circle/circle-fill-on-texture.js";
import { Entity } from "../../entity/entity.js";
import { EntityController } from "../../entity/entity-controller.js";
import { Enemy2d } from "../../geometry/complex/enemy2d-mesh.js";
import { PlayerAvatar } from "../../player/player-avatar.js";
import { createTexture } from "../../../engine/tex.js";
import { blue, green } from "../../../common/colors.js";

export function Level000() {
    this.player = null;
    this.radiusStep = 0;
}

Level000.prototype.load = function () {
    this.player = new Entity(new PlayerAvatar(50, 50));
    const tmpTex = createTexture(250, 250, blue);
    this.enemy = new Entity(new Enemy2d(250, 250, tmpTex));
    this.enemyController = new EntityController(this.enemy);
}

Level000.prototype.update = function (deltaTime) {
    this.radiusStep += (Math.PI * 0.1) * deltaTime;
    const distance = this.enemy.position[0] - this.player.position[0];

    if (Math.abs(distance) >= 50) {
        this.enemyController.move();
    }
}

Level000.prototype.draw = function (renderer) {
    const radius = Math.abs(Math.sin(this.radiusStep)) * 250.0;
    drawCircleFillOnTexture(renderer.tex(), renderer.texWidth(), 500, 500, radius, green);

    this.enemy.draw(renderer);
    this.player.draw(renderer);
}
