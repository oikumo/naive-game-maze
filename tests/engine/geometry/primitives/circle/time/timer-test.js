import { test, assertions } from 'naive-tests';
import { Timer } from '../../../../../../src/engine/time/timer.js';
const { equals } = assertions;

function sleep(waitMiliseconds = 10) {
    const start = Date.now();
    while (Date.now() - start < waitMiliseconds) {
    }
}

test('timer - start and step', () => {
    const timer = new Timer();
    equals(timer.delta, 0, 'delta must be zero');
    timer.start();
    equals(timer.delta, 0, 'after start delta must be zero');

    sleep();

    timer.step();
    equals(timer.delta > 0, true, `after start delta must be gratter than zero, delta ${timer.delta}`);
});

test('timer - delta time seconds', () => {
    const timer = new Timer();
    const milliSecondsExpected = 10;

    timer.start();
    equals(timer.deltaSeconds(), 0);

    sleep(milliSecondsExpected);
    timer.step();

    const seconds = timer.deltaSeconds();
    const secondsExpected = milliSecondsExpected / 1000.0;
    equals(seconds >= secondsExpected, true);
});