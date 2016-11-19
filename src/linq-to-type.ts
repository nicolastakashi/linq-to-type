Array.prototype.first = function (expression) {

    if (this.any()) {
        return expression ? this.filter(expression)[0] : this[0]
    }

    throw new TypeError("The source sequence is empty.")
}

Array.prototype.firstOrDefault = function (expression) {
    if (this.any()) {
        return this.first(expression)
    }

    return undefined
}

Array.prototype.where = function (expression) {
    return this.filter(expression)
}

Array.prototype.any = function (expression) {
    return expression ? this.some(expression) : this.length > 0
}

Array.prototype.all = function (expression) {
    return this.every(expression)
}

Array.prototype.distinct = function () {
    return this.where((item, index, iterator) => iterator.indexOf(item) === index)
}

Array.prototype.elementAt = function (index) {
    if (this.any()) {
        return this[index]
    }
    throw new TypeError("The source sequence is empty.")
}

Array.prototype.elementAtOrDefault = function (index) {
    if (this.any()) {
        return this[index]
    }
    throw new TypeError("The source sequence is empty.")
}

Array.prototype.contains = function (object) {
    return this.some(item => item === object)
}

Array.prototype.except = function (source) {
    return this.where(item => !source.contains(item))
}

Array.prototype.aggregate = function (accumulator, value) {
    return this.reduce(accumulator, value)
}

Array.prototype.select = function (expression) {
    return this.map(expression)
}

Array.prototype.sum = function (expression) {
    return expression ? this.select(expression).sum() : this.aggregate((accumulator, value) => accumulator += (+value), 0)
}

Array.prototype.count = function (expression) {
    return expression ? this.where(expression).count() : this.length
}

Array.prototype.average = function (expression) {
    return this.sum(expression) / this.count(expression)
}

Array.prototype.groupBy = function (group, expression) {
    return this.aggregate((accumulator, value) => ((accumulator)[group(value)]
        ? (accumulator)[group(value)].push(expression(value))
        : (accumulator)[group(value)] = [expression(value)], accumulator), {})
}

Array.prototype.last = function (expression) {
    return expression ? this.where(expression).last() : this[this.count() - 1]
}

Array.prototype.max = function () {
    return this.aggregate((workingItem, nextItem) => workingItem > nextItem ? workingItem : nextItem)
}

Array.prototype.min = function () {
    return this.aggregate((workingItem, nextItem) => workingItem < nextItem ? workingItem : nextItem)
}

Array.prototype.removeAt = function (index) {
    this.splice(index, 1)
}

Array.prototype.remove = function (item) {
    const itemIndex = this.indexOf(item)
    return itemIndex >= 0 ? (this.removeAt(itemIndex), true) : false
}

Array.prototype.removeAll = function (expression) {
    return this.where(function (): any {
        return !expression.apply(this, arguments)
    })
}

Array.prototype.single = function (expression) {
    if (this.count(expression) !== 1)
        throw new TypeError("The collection has more than one element")

    return this.first(expression)
}

Array.prototype.singleOrDefault = function (expression) {
    return this.count(expression) ? this.single(expression) : undefined
}

Array.prototype.union = function (second) {
    return this.concat(second)
}

Array.prototype.selectMany = function (expression) {
    return [].concat.apply([], this.map(expression))
}

Array.prototype.zip = function (second, resultSelector) {
    const until = Math.min(second.length, this.length)
    const result = []
    for (var i = 0; i < until; i++)
        result.push(resultSelector(this[i], second[i]))
    return result
}

Array.prototype.defaultIfEmpty = function (defaultValue) {
    return defaultValue !== undefined ? (this.count() ? this : defaultValue) : (this.count() ? this : undefined)
}

Array.prototype.intersect = function (source) {
    if (this.any() && source.any()) {
        return this.where(x => source.contains(x))
    }
    throw new TypeError("first or second is null.")
}