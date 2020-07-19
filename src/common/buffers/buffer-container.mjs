const BufferBlock = function (typedArrayCreator, itemSize, itemsCount) {
    this.creator = typedArrayCreator
    this.itemSize = itemSize
    this.itemsCount = itemsCount
    this.topIndex = 0
    this.count = 0
}

BufferBlock.prototype.create = function () {
    const bufferSize = this.size()
    this.buffer = new this.creator(new ArrayBuffer(bufferSize))
}

BufferBlock.prototype.hasCapacity = function () {
    return this.buffer.length > this.topIndex
}

BufferBlock.prototype.add = function (item) {
    if (!this.hasCapacity()) {
        this.expand()
    }
    this.buffer.set(item, this.topIndex)
    this.topIndex += this.itemSize
    const position = this.count
    this.count++
    return position
}

BufferBlock.prototype.expand = function () {
    const currentBufferSize = this.buffer.byteLength
    const newSize = currentBufferSize + this.size()
    const expanded = new this.creator(new ArrayBuffer(newSize))
    expanded.set(this.buffer, 0)
    this.buffer = expanded
}

BufferBlock.prototype.size = function () {
    const bytesPerItem = this.creator.BYTES_PER_ELEMENT
    const bufferSize = this.itemSize * bytesPerItem * this.itemsCount
    return bufferSize
}

const BufferContainer = function (typedArrayCreator, itemSize, itemsCount) {
    this.buffer = new BufferBlock(typedArrayCreator, itemSize, itemsCount)
    this.buffer.create()
}

BufferContainer.prototype.add = function (item) {
    const position = this.buffer.add(item)
    return position
}

const createF32Container = (itemSize, itemsCount) => {
    const container = new BufferContainer(Float32Array, itemSize, itemsCount)
    return container
}

export {
    createF32Container
}
