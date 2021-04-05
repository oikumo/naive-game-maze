import { test, assert } from 'naive-tests';
import { Entity } from '../../../src/game/entity/entity.js';
import { PlayerAvatar } from '../../../src/game/player/player-avatar.js';
import { PlayerController } from '../../../src/game/player/player-controller.js';

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
    assert.equals(0, distance);
});

test('player controller - actions', () => {
    const player = createPlayerController();
    assert.equals('primaryActionDisabled', player.update());
    player.ActionPrimaryEnable();
    assert.equals('primaryActionEnabled', player.update());
});