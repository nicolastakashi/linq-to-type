import { expect } from 'chai'
require('../src/linq-to-type')

describe('Given an array', () => {
    let items = [1, 2, 3, 4, 5, 6, 7, 8]
    describe('and you are asked the first item in the collection without an expression', () => {
        it('should return the first item', () => {
            let result = items.first()
            expect(result).to.be.eq(1)
        })

        it('should throw an exception with collection is empty',() => {
            let items = [];
            expect(() => items.first().to.throws(TypeError, 'The source sequence is empty.'))
        })
    })

    describe('and you are asked the first or default item in the collection', () => {
        it('should return the first item', () => {
            let result = items.firstOrDefault(x => x == 1)
            expect(result).to.be.eq(1)
        })

        it('should return undefined if collection is empty', () => {
            let items = []
            let result = items.firstOrDefault(x => x > 1);
            expect(result).to.be.undefined
        })
    })

    describe('and you are asked the first item of the collection with an expression', () => {
        it('should return the first item in the collection if the expression is met', () => {
            let result = items.first(x => x > 2)
            expect(result).to.be.eq(3)
        })

        it('should return undefined if the expression is not met', () => {
            let result = items.first(x => x < 0)
            expect(result).to.be.undefined
        })
    })

    describe('and provides a filter with an expression', () => {
        it('should return the items matching the expression', () => {
            let result = items.where(x => x > 2)
            expect(result.length).to.be.eq(6)
        })

        it('should return an empty collection when the expression is not met', () => {
            let result = items.where(x => x < 0)
            expect(result.length).to.be.empty
        })
    })

    describe('and check if there is any object within the collection without expression', () => {
        it('should return true to see if there is value in the collection', () => {
            let result = items.any()
            expect(result).to.be.true
        })
    })

    describe('and check if there is any object within the collection with expression', () => {
        it('should return true if any items matching the expression', () => {
            let result = items.any(x => x > 2)
            expect(result).to.be.true
        })

        it('should return false if any items no matching the expression', () => {
            let result = items.any(x => x < 0)
            expect(result).to.be.false
        })
    })

    describe('and verifies that all items in the collection meet an expression', () => {
        it('should return true if all items in the collection meet the expression', () => {
            let result = items.all(x => x > 0)
            expect(result).to.be.true
        })

        it('should return false if all items from the collection does not meet the expression', () => {
            let result = items.all(x => x < 0)
            expect(result).to.be.false
        })
    })


    describe('and requests an item from a specific position of the collection', () => {
        it('should return the item if there is the required position', () => {
            let result = items.elementAt(0)
            expect(result).not.be.undefined
        })

        it('should return undefined if the position does not exist in the collection', () => {
            let result = items.elementAt(10)
            expect(result).to.be.undefined
        })
    })

    describe('and checks whether an element within the list with expression informed', () => {
        it('should return true if an item within the collection that meets the expression', () => {
            let result = items.contains(2)
            expect(result).to.be.true
        })

        it('should return false if there is an item in the collection that meets the expression', () => {
            let result = items.contains(10)
            expect(result).to.be.false

        })
    })

    describe('and you want to run a function between the values ​​of this collection', () => {
        it('should return the items separated by dash', () => {
            const sentence = 'the quick brown fox jumps over the lazy dog'
            const reversed = 'dog lazy the over jumps fox brown quick the '
            const words = sentence.split(' ')
            let result = words.aggregate((workingSentence, next) => next + ' ' + workingSentence, '')
            expect(result).to.eq(reversed)
        })
    })

    describe('and you are asked the different items', () => {
        it('should return the different items', () => {
            let items = [1, 1, 2, 2, 3, 3, 4, 4]
            let result = items.distinct().toString()
            expect(result).to.be.eq('1,2,3,4')
        })
    })

    describe('and it is requested items that existing in the two lists', () => {
        it('should return the items that are on both list   s', () => {
            let arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            let arrayTwo = [1, 2, 3, 4, 5]
            let result = arrayOne.except(arrayTwo)
            expect(result.toString()).to.be.eq('6,7,8,9,10')
        })
    })

    describe('and select values ​​from the collection based on an expression', () => {
        it('should return the values ​​that meet the expression', () => {
            let result = items.select(x => x + x)
            expect(result.toString()).to.be.eq('2,4,6,8,10,12,14,16')
        })
    })


    describe('and performs the sum of the items in the collection', () => {
        it('should return the value of the sum of the items based on an expression', () => {
            let result = items.sum(x => x)
            expect(result).to.be.eq(36)
        })

        it('should return the value of the sum of the items without an expression', () => {
            let result = items.sum()
            expect(result).to.be.eq(36)
        })
    })


    describe('and calls on the amount of items in the collection', () => {
        it('should return the amount of items that meet the expression', () => {
            let result = items.count(x => x > 2)
            expect(result).to.be.eq(6)
        })

        it('should return the amount of items without reporting an expression', () => {
            let result = items.count()
            expect(result).to.be.eq(8)
        })
    })


    describe('and asks the average values ​​of the collection', () => {
        it('should return the average of items from the collection based on the expression', () => {
            let result = items.average(x => x)
            expect(result).to.be.eq(4.5)
        })

        it('should return the average of items of the collection without an expression', () => {
            let result = items.average()
            expect(result).to.be.eq(4.5)
        })
    })


    describe('and you want to group the items in the collection', () => {
        it('should return the grouped items', () => {
            let items = [1, 1, 2, 2, 3, 3, 4, 4]
            let result = { '1': [1, 1], '2': [2, 2], '3': [3, 3], '4': [4, 4] }
            let groupedItems = items.groupBy(x => x, x => x)
            expect(groupedItems.toString()).to.be.eq(result.toString())
        })
    })

    describe('and requests the last item of the collection', () => {
        it('should return the last item that meets the expression', () => {
            let result = items.last(x => x > 7)
            expect(result).to.be.eq(8)
        })

        it('should return the last item without an expression', () => {
            let result = items.last()
            expect(result).to.be.eq(8)
        })
    })

    describe('and requests the largest item in the collection', () => {
        it('should return the largest item in the collection', () => {
            let result = items.max()
            expect(result).to.be.eq(8)
        })
    })

    describe('and requests the smallest item from the collection', () => {
        it('should return the smallest item from the collection', () => {
            let result = items.min()
            expect(result).to.be.eq(1)
        })
    })



    describe('and you want to remove a specific item from the collection', () => {
        it('should return true if you can remove the item', () => {
            let items = [1, 2, 3, 4, 5, 6, 7, 8]
            let result = items.remove(1)
            expect(result).to.be.true
        })
    })

    describe('and you want to remove an item from a specific index of the collection', () => {
        let items = [1, 2, 3, 4, 5, 6, 7, 8]
        items.removeAt(0)
        let result = [2, 3, 4, 5, 6, 7, 8]
        expect(items.toString()).to.be.eq(result.toString())
    })

    describe('and want to remove all items from the collection', () => {
        it('should remove all itens from collection that matching the expression', () => {
            let items = [1, 2, 3, 4, 5, 6, 7, 8]
            let result = items.removeAll(x => x > 1)
            expect(result.toString()).to.be.eq("1")
        })
    })

    describe('and calls on the only item in the collection', () => {
        it('should return the single list item', () => {
            let result = items.single(x => x == 1)
            expect(result).to.be.eq(1)
        })

        it('should throw an exception if more than one item in the collection', () => {
            expect(() => items.single(x => x > 1)).to.throws(TypeError, 'The collection has more than one element')
        })
    })



    describe('and calls on the only item in the collection or the default value', () => {
        it('should return the single list item', () => {
            let items = [1, 2, 3, 4, 5, 6, 7, 8]
            let result = items.singleOrDefault(x => x == 1)
            expect(result).to.be.eq(1)
        })

        it('should throw an exception if more than one item in the collection', () => {
            let items = [1, 2, 3, 4, 5, 6, 7, 8]
            expect(() => items.singleOrDefault(x => x > 1)).to.throws(TypeError, 'The collection has more than one element')
        })

        it('should return undefined if collection is empty', () => {
            let items = []
            expect(items.singleOrDefault(x => x > 1)).to.be.undefined
        })
    })

})