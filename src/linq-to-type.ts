Array.prototype.first = function (expression) {
    return expression ? this.filter(expression).first() : this[0]
}

Array.prototype.where = function (expression) {
    return this.filter(expression)
}

Array.prototype.any = function (expression) {
    return expression ? this.some(expression) : this.length > 0;
}

Array.prototype.all = function (expression) {
    return this.every(expression)
}

Array.prototype.distinct = function () {
    return this.where((item, index, iterator) => iterator.indexOf(item) === index)
}

Array.prototype.elementAt = function (index) {
    return this[index]
}

Array.prototype.contains = function (object) {
    return this.some(item => item === object)
}

Array.prototype.except = function (source) {
    return this.where(item => source.contains(item))
}

Array.prototype.aggregate = function (accumulator, value) {
    return this.reduce(accumulator, value)
}

Array.prototype.select = function (expression) {
    return this.map(expression)
}

Array.prototype.sum = function (expression) {
    return expression ? this.select(expression).sum() : this.aggregate((accumulator, value) => accumulator += (+value), 0);
}

Array.prototype.count = function (expression) {
    return expression ? this.where(expression).count() : this.length;
}

Array.prototype.average = function (expression) {
    return this.sum(expression) / this.count(expression)
}