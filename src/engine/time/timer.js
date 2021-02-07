export function Timer() {
    this.delta = 0;
    this.lastStepTime = 0;
}

Timer.prototype.start = function () {
    this.delta = 0;
    this.lastStepTime = Date.now();
}

Timer.prototype.step = function () {
    const now = Date.now();
    this.delta = now - this.lastStepTime;
    this.lastStepTime = now;
}

Timer.prototype.deltaSeconds = function () {
    return this.delta / 1000.0;
}