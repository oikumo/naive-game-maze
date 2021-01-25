import { createTexture } from "../../engine/tex.js";

function Mesh(id, mesh) {
    this.id = id;
    this.mesh = mesh;
}

export function MeshesDB() {
    this.textures = new Map();
    this.quadsDrawers = new Map();
}

MeshesDB.prototype.tryFindTexture = function (id) {
    if (!this.textures.has(id)) return null;
    return this.textures.get(id);
}

MeshesDB.prototype.addFlatTexture = function (width, height, color) {
    const tex = createTexture(width, height, color);
    const id = MeshesDB.createId();
    const mesh = new Mesh(id, tex);
    this.textures.set(id, mesh);
    return id;
}

MeshesDB.createId = function () {
    const id = Symbol();
    return id;
}
