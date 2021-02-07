import { test, assertions } from 'naive-tests'
import { vector3Distance } from '../../../src/common/math/vector/vector3-utils.js';
import { vector3 } from '../../../src/common/math/vector/vector3.js';
import { Entity } from '../../../src/game/entity/entity.js';
import { PlayerAvatar } from '../../../src/game/player/player-avatar.js';
import { PlayerController } from '../../../src/game/player/player-controller.js';
const { equals } = assertions;

function createPlayerController() {
    const avatar = new PlayerAvatar(100, 100);
    const entity = new Entity(avatar);
    const playerController = new PlayerController(entity);
    return playerController;
}

test('player controller - moveTo', () => {
    const player = createPlayerController();
    const target = vector3(0, 100, 0);
    player.moveTo(target);
    const distance = vector3Distance(target, player.position);
    equals(0, distance);
});

test('player controller - actions', () => {
    const player = createPlayerController();
    equals('primaryActionDisabled', player.update());
    player.ActionPrimaryEnable();
    equals('primaryActionEnabled', player.update());
});