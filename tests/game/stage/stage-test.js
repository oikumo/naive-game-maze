import { test, assert } from 'naive-tests';
import { red } from '../../../src/common/colors.js';
import { MeshesDB } from '../../../src/game/databases/meshes-db.js';
import { Entity } from '../../../src/game/entity/entity.js';
import { Stage } from '../../../src/game/stage/stage.js';

function createStageDummy() {
    const renderer = {};
    const meshes = new MeshesDB();
    const mesh = meshes.addFlatTexture(10, 10, red);

    const player = new Entity(mesh);

    const playerInput = { setPlayer: () => { } };
    const stage = new Stage(renderer, playerInput);
    //stage.texture.fill(() => 1);
}

test('stage create', () => {

});

test('stage start', () => { });

test('stage tick', () => { });

test('stage update', () => { });

test('stage draw', () => { });
