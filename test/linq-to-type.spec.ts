import { expect } from 'chai'
require('../src/linq-to-type')

describe('Given an array of integers', () => {
    let items = [1, 2, 3, 4, 5, 6]
    describe('and you are asked the first item in the array', () => {
        it('should return the first item in the array', () => {
            var firstItem = items.first()
            expect(firstItem).to.eq(1)
        })
    })

    describe('and you are asked the first item of the array that is larger than the number 2', () => {
        it('should return the first item in the array', () => {
            var firstItem = items.first(x => x > 2)
            expect(firstItem).to.eq(3)
        })
    })
})