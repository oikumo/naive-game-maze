export function EntityController(entity) {
  this.entity = entity;
}
EntityController.prototype.move = function () {
  this.entity.position[0] += 0.5;
  this.entity.position[1] += 0.5;
};
