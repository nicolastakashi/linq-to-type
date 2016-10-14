import { expect } from 'chai'
require('../src/linq-to-type')

describe('Given an array', () => {
    let items = [1, 2, 3, 4, 5, 6, 7, 8]
    describe('and you are asked the first item in the collection without an expression', () => {
        it('should return the first item', () => {
            let result = items.first()
            expect(result).to.be.eq(1)
        })
    })

    describe('and you are asked the first item of the collection with an expression', () => {
        it('should return the first item in the collection if the expression is met', () => {
            let result = items.first(x => x > 2)
            expect(result).to.be.eq(3)
        })

        it('should return undefined if the expression is not met', () => {
            let result = items.first(x => x < 0);
            expect(result).to.be.undefined;
        })
    })

    describe('and provides a filter with an expression', () => {
        it('should return the items matching the expression', () => {
            let result = items.where(x => x > 2)
            expect(result.length).to.be.eq(6)
        })

        it('should return an empty collection when the expression is not met', () => {
            let result = items.where(x => x < 0);
            expect(result.length).to.be.empty
        })
    })

    describe('and check if there is any object within the collection without expression', () => {
        it('should return true to see if there is value in the collection', () => {
            let result = items.any();
            expect(result).to.be.true;
        })
    });

    describe('and check if there is any object within the collection with expression', () => {
        it('should return true if any items matching the expression', () => {
            let result = items.any(x => x > 2);
            expect(result).to.be.true;
        })

        it('should return false if any items no matching the expression', () => {
            let result = items.any(x => x < 0);
            expect(result).to.be.false;
        })
    })

    describe('and verifies that all items in the collection meet an expression', () => {
        it('should return true if all items in the collection meet the expression', () => {
            let result = items.all(x => x > 0);
            expect(result).to.be.true;
        })

        it('should return false if all items from the collection does not meet the expression', () => {
            let result = items.all(x => x < 0);
            expect(result).to.be.false;
        })
    })


    describe('and requests an item from a specific position of the collection', () => {
        it('should return the item if there is the required position', () => {
            let result = items.elementAt(0);
            expect(result).not.be.undefined;
        });

        it('should return undefined if the position does not exist in the collection', () => {
            let result = items.elementAt(10);
            expect(result).to.be.undefined;
        });
    });

})

describe('given an array of repeating values', () => {
    describe('and you are asked the different items', () => {
        it('should return the different items', () => {
            let items = [1, 1, 2, 2, 3, 3, 4, 4];
            let result = items.distinct().toString()
            expect(result).to.be.eq('1,2,3,4')
        })
    });
})