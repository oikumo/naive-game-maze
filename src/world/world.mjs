const World = function () {
    this.entities = []
}

World.prototype.addEntity = function (entity) {
    this.entities.push(entity)
}

export {
    World
}