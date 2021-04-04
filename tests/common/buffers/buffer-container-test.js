import { test, assert } from 'naive-tests';
import { createF32Container } from '../../../src/common/buffers/buffer-container.js';

test('container float32 add with expansion', () => {
    const itemSize = 2;
    const itemsCount = 3;
    const container = createF32Container(itemSize, itemsCount);
    assert.equals(0, container.add([1, 2]));
    assert.equals(1, container.add([3, 4]));
    assert.equals(2, container.add([5, 6]));
    assert.equals(3, container.add([7, 8]));
})