import { expect } from 'chai'
require('../src/linq-to-type')


describe('Union tests', () => {
    describe('Given two arrays', () => {
        describe('and you are asked union them', () => {
            it('should return new collection values from both collections', () => {
                let items1 = [1, 2]
                let items2 = [1, 2]
                let result = items1.union([3, 4])
                expect(result).to.be.deep.equal([1, 2, 3, 4])
            })
        })
    })
})

describe('Zip test', () => {
    describe('Given two arrays', () => {
        describe('and you are asked to zip them based on an expression in a single one senquentialy', () => {
            it('should return new collection with values ​​that meet the expression', () => {
                let items1 = [1, 2]
                let items2 = [1, 2]
                let result = items1.zip(items2, (a, b) => a + b)
                expect(result).to.be.deep.equal([2, 4])
            })
        })
    })
})


let items = [1, 2, 3, 4, 5, 6, 7, 8]

describe('SelectMany test', () => {
    describe('Given an array', () => {
        describe('and you are asked flat the collection that each item contains', () => {
            it('should return new collection with all values from each object inner collection', () => {
                let result = [{ values: items }, { values: [9, 0] }].selectMany(x => x.values)
                expect(result).to.be.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
            })
        })
    })
})

describe('First test', () => {
    describe('Given an array', () => {
        describe('and you are asked the first item in the collection without an expression', () => {
            it('should return the first item', () => {
                let result = items.first()
                expect(result).to.be.eq(1)
            })
            it('should throw an exception with collection is empty', () => {
                let items = []
                expect(() => items.first()).to.throws(TypeError, 'The source sequence is empty.')
            })
        })

        describe('and you are asked the first item in the collection without an expression', () => {
            it('should return the first item', () => {
                let result = items.first()
                expect(result).to.be.eq(1)
            })
            it('should throw an exception with collection is empty', () => {
                let items = []
                expect(() => items.first()).to.throws(TypeError, 'The source sequence is empty.')
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
    })
})

describe('FirstOrDefault test', () => {
    describe('Given an array', () => {
        describe('and you are asked the first or default item in the collection', () => {
            it('should return the first item that meets the expression', () => {
                let result = items.firstOrDefault(x => x > 1)
                expect(result).to.be.eq(2)
            })

            it('sould return default value if not meet the expression', () => {
                let result = items.firstOrDefault(x => x > 10)
                expect(result).to.be.eq(undefined)
            })

            it('should return the first item without an expression', () => {
                let result = items.firstOrDefault()
                expect(result).to.be.eq(1)
            })

            it('should throws an exception if the collection is empty', () => {
                let items = []
                expect(() => items.firstOrDefault()).to.throws(TypeError, 'The source sequence is empty.')
            })
        })
    })
})

describe('Where test', () => {
    describe('Given an array', () => {
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
    })
})

describe('Any test', () => {
    describe('Given an array', () => {
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
    })
})

describe('All test', () => {
    describe('Given an array', () => {
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
    })
})

describe('ElementAt', () => {
    describe('Given an array', () => {
        describe('and requests an item from a specific position of the collection', () => {
            it('should return the item if there is the required position', () => {
                let result = items.elementAt(0)
                expect(result).not.be.undefined
            })

            it('should throws an exception if the collection is empty when call elementAt', () => {
                let items = [];
                expect(() => items.elementAt(0)).to.throws(TypeError, 'The source sequence is empty.')
            })
        })
    })
})

describe('ElementAtOrDefault test', () => {
    describe('Given an array', () => {
        describe('and requests an item from a specific position of the collection', () => {
            it('should return default element if call elementAtOrDefault', () => {
                let result = items.elementAtOrDefault(0)
                expect(result).not.be.undefined
            })

            it('should return undefined if call elementAtOrDefault and position not exist', () => {
                let result = items.elementAtOrDefault(10)
                expect(result).to.be.undefined
            })

            it('should throws an exception if the collection is empty when call elementAtOrDefault', () => {
                let items = [];
                expect(() => items.elementAtOrDefault(0)).to.throws(TypeError, 'The source sequence is empty.')
            })
        })
    })
})

describe('Contains test', () => {
    describe('Given an array', () => {
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
    })
})

describe('Aggregate test', () => {
    describe('Given an array', () => {
        describe('and you want to run a function between the values ​​of this collection', () => {
            it('should return the items separated by dash', () => {
                const sentence = 'the quick brown fox jumps over the lazy dog'
                const reversed = 'dog lazy the over jumps fox brown quick the '
                const words = sentence.split(' ')
                let result = words.aggregate((workingSentence, next) => next + ' ' + workingSentence, '')
                expect(result).to.eq(reversed)
            })
        })
    })
})

describe('Distinct test', () => {
    describe('Given an array', () => {
        describe('and you are asked the different items', () => {
            it('should return the different items', () => {
                let items = [1, 1, 2, 2, 3, 3, 4, 4]
                let result = items.distinct().toString()
                expect(result).to.be.eq('1,2,3,4')
            })
        })
    })
})

describe('Except test', () => {
    describe('Given an array', () => {
        describe('and it is requested items that existing in the two lists', () => {
            it('should return the items that are on both list   s', () => {
                let arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                let arrayTwo = [1, 2, 3, 4, 5]
                let result = arrayOne.except(arrayTwo)
                expect(result.toString()).to.be.eq('6,7,8,9,10')
            })
        })
    })
})

describe('Select test', () => {
    describe('Given an array', () => {
        describe('and select values ​​from the collection based on an expression', () => {
            it('should return the values ​​that meet the expression', () => {
                let result = items.select(x => x + x)
                expect(result.toString()).to.be.eq('2,4,6,8,10,12,14,16')
            })
        })
    })
})

describe('Sum test', () => {
    describe('Given an array', () => {
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
    })
})

describe('Count test', () => {
    describe('Given an array', () => {
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
    })
})

describe('Average test', () => {
    describe('Given an array', () => {
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
    })
})

describe('GroupBy test', () => {
    describe('Given an array', () => {
        describe('and you want to group the items in the collection', () => {
            it('should return the grouped items', () => {
                let items = [1, 1, 2, 2, 3, 3, 4, 4]
                let result = { '1': [1, 1], '2': [2, 2], '3': [3, 3], '4': [4, 4] }
                let groupedItems = items.groupBy(x => x, x => x)
                expect(groupedItems.toString()).to.be.eq(result.toString())
            })
        })
    })
})

describe('Last test', () => {
    describe('Given an array', () => {
        describe('and requests the last item of the collection', () => {
            it('should return the last item that meets the expression', () => {
                let result = items.last(x => x < 7)
                expect(result).to.be.eq(6)
            })

            it('should return the last item without an expression', () => {
                let result = items.last()
                expect(result).to.be.eq(8)
            })

            it('should throws an exception if the collection is empty', () => {
                let items = []
                expect(() => items.last()).to.throws(TypeError, 'The source sequence is empty.')
            })
        })
    })
})

describe('LastOrDefault test', () => {
    describe('Given an array', () => {
        describe('and requests the last item of the collection', () => {
            it('should return the last item that meets the expression', () => {
                let result = items.lastOrDefault(x => x < 7)
                expect(result).to.be.eq(6)
            })

            it('should return the last item without an expression', () => {
                let result = items.lastOrDefault()
                expect(result).to.be.eq(8)
            })

            it('should throws an exception if the collection is empty', () => {
                let items = []
                expect(() => items.lastOrDefault()).to.throws(TypeError, 'The source sequence is empty.')
            })

            it('sould return default value if not meet the expression', () => {
                let result = items.lastOrDefault(x => x > 10)
                expect(result).to.be.eq(undefined)
            })
        })
    })
})

describe('Max test', () => {
    describe('Given an array', () => {
        describe('and requests the largest item in the collection', () => {
            it('should return the largest item in the collection', () => {
                let result = items.max()
                expect(result).to.be.eq(8)
            })
        })
    })
})

describe('Min test', () => {
    describe('Given an array', () => {
        describe('and requests the smallest item from the collection', () => {
            it('should return the smallest item from the collection', () => {
                let result = items.min()
                expect(result).to.be.eq(1)
            })
        })
    })
})

describe('Remove test', () => {
    describe('Given an array', () => {
        describe('and you want to remove a specific item from the collection', () => {
            it('should return true if you can remove the item', () => {
                let items = [1, 2, 3, 4, 5, 6, 7, 8]
                let result = items.remove(1)
                expect(result).to.be.true
            })
        })
    })
})

describe('RemoveAt', () => {
    describe('Given an array', () => {
        describe('and you want to remove an item from a specific index of the collection', () => {
            let items = [1, 2, 3, 4, 5, 6, 7, 8]
            items.removeAt(0)
            let result = [2, 3, 4, 5, 6, 7, 8]
            expect(items.toString()).to.be.eq(result.toString())
        })
    })
})

describe('RemoveAll', () => {
    describe('Given an array', () => {
        describe('and want to remove all items from the collection', () => {
            it('should remove all itens from collection that matching the expression', () => {
                let items = [1, 2, 3, 4, 5, 6, 7, 8]
                let result = items.removeAll(x => x > 1)
                expect(result.toString()).to.be.eq("1")
            })
        })
    })
})

describe('Singles test', () => {
    describe('Given an array', () => {
        describe('and calls on the only item in the collection', () => {
            it('should return the single list item', () => {
                let result = items.single(x => x == 1)
                expect(result).to.be.eq(1)
            })

            it('should throw an exception if more than one item in the collection', () => {
                expect(() => items.single(x => x > 1)).to.throws(TypeError, 'The collection has more than one element')
            })
        })
    })
})

describe('SingleOrDefault test', () => {
    describe('Given an array', () => {
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
})

describe('DefaultIfEmpty test', () => {
    describe('Given an array', () => {
        describe('and calls default value if the collection is empty', () => {
            it('should return undefined, if the collection is empty and not informe the default value', () => {
                let items = []
                let result = items.defaultIfEmpty()
                expect(result).to.be.undefined
            })
            it('should return default value informed, if the collection is empty', () => {
                let items = []
                let result = items.defaultIfEmpty(0)
                expect(result).to.be.eq(0)
            })
        })
    })
})

describe('Intersect test', () => {
    describe('Given two array', () => {
        describe('and calls Intersect method to get duplicate itens in two collections', () => {
            it('should give duplicate values in two collections', () => {
                let items1 = [1, 2, 3, 4]
                let items2 = [1, 2, 3, 4, 5, 6, 7, 8]
                let result = items1.intersect(items2) as number[];
                expect(result.sum()).to.eq(10)
            })

            it('should throws an exception if the first collection is empty', () => {
                let items1 = []
                let items2 = [1, 2, 3, 4]
                expect(() => items1.intersect(items2)).to.throws(TypeError, 'first or second is null.')
            })

            it('should throws an exception if the second collection is empty', () => {
                let items1 = [1, 2, 3, 4]
                let items2 = []
                expect(() => items1.intersect(items2)).to.throws(TypeError, 'first or second is null.')
            })
        })
    })
})

describe('GroupJoin test', () => {
    describe('Given two objects', () => {
        describe('and calls GroupJoin', () => {

            class Person {
                public Name: string;

                constructor(name: string) {
                    this.Name = name;
                }
            }

            class Pet {
                public Name: string;
                public Owner: Person;

                constructor(name: string, owner: Person) {
                    this.Name = name;
                    this.Owner = owner;
                }
            }

            it('should create a list where each element is an anonymous  type that contains a persons name and a collection of names of the pets they own', () => {


                const magnus = new Person('Hedlund, Magnus');
                const terry = new Person('Adams, Terry');
                const charlotte = new Person('Weiss, Charlotte');

                const barley = new Pet('Barley', terry);
                const boots = new Pet('Boots', terry);
                const whiskers = new Pet('Whiskers', charlotte);
                const daisy = new Pet('Daisy', magnus);

                const people = new Array<Person>(magnus, terry, charlotte);
                const pets = new Array<Pet>(barley, boots, whiskers, daisy);

                const query = people.groupJoin(pets, person => person, pet => pet.Owner, (person, petCollection) =>
                    ({ OwnerName: person.Name, Pets: petCollection.select(pet => pet.Name) })) as Array<any>;
                const result = 'Hedlund, Magnus: Daisy,Adams, Terry: Barley,Boots,Weiss, Charlotte: Whiskers';
                expect(query.select(obj => `${obj.OwnerName}: ${obj.Pets}`).toString()).to.be.eq(result)
            })

            it('should throws an exception if the collections is empty', () => {
                var people = Array<Person>();
                var pets = Array<Pet>();
                expect(() => people.groupJoin(pets, person => person, pet => pet.Owner, (person, petCollection) =>
                    ({ OwnerName: person.Name, Pets: petCollection.select(pet => pet.Name) }))).to.throws(TypeError, 'outer or inner or outerKeySelector or innerKeySelector or resultSelector is null.')
            })
        })
    })
})

describe('Take test', () => {
    describe('Given an array', () => {
        describe('and calls Take', () => {
            it('should return 1 item from array', () => {
                let result = items.take(1)
                expect(result.toString()).to.be.eq('1');
            })

            it('should throws an exception if collection is empty', () => {
                let items = []
                expect(() => items.take(1)).to.throws(TypeError, 'source is null')
            })
        })
    })
})

describe('TakeWhile test', () => {
    describe('Given an array', () => {
        describe('and calls TakeWhile', () => {
            it('should return fruits that is not orange', () => {
                let fruits = ["apple", "banana", "mango", "orange", "passionfruit", "grape"]
                let result = fruits.takeWhile(fruit => fruit !== 'orange')
                expect(result.toString()).to.be.eq('apple,banana,mango')
            })

            it('should throws an exception if collection is empty', () => {
                let fruits = []
                expect(() => fruits.takeWhile(fruit => fruit !== 'orange')).to.throws(TypeError, 'source or predicate is null')
            })

            it('should throws an exception if predicate is empty', () => {
                let fruits = ["apple", "banana", "mango", "orange", "passionfruit", "grape"]
                expect(() => fruits.takeWhile(undefined)).to.throws(TypeError, 'source or predicate is null')
            })

        })
    })
})

describe('TakeWhile test', () => {
    describe('Given an array', () => {
        interface IPackage {
            Company: string;
            Weight: number;
            TrackingNumber: number;
        };

        class Package {
            public Company: string;
            public Weight: number;
            public TrackingNumber: number;

            constructor(p: IPackage) {
                this.Company = p.Company;
                this.Weight = p.Weight;
                this.TrackingNumber = p.TrackingNumber;
            }
        }

        const packages = new Array<Package>(
            new Package({
                Company: 'Coho Vineyard',
                TrackingNumber: 89453312, Weight: 25.2
            }),
            new Package({
                Company: 'Lucerne Publishing',
                TrackingNumber: 89112755, Weight: 18.7
            }),
            new Package({
                Company: 'Wingtip Toys',
                TrackingNumber: 299456122, Weight: 6.0
            }),
            new Package({
                Company: 'Contoso Pharmaceuticals',
                TrackingNumber: 670053128, Weight: 9.3
            }),
            new Package({
                Company: 'Wide World Importers',
                TrackingNumber: 4665518773, Weight: 33.8
            })
        );

        const result = {
            'C': [
                'Coho Vineyard 89453312',
                'Contoso Pharmaceuticals 670053128'
            ],
            'L': [
                'Lucerne Publishing 89112755'
            ],
            'W': [
                'Wingtip Toys 299456122',
                'Wide World Importers 4665518773'
            ],
        };

        describe('and calls TakeWhile', () => {
            it('should return fruits that is not orange', () => {
                let lookup = packages.toLookup(p => p.Company.substring(0, 1), p => p.Company + ' ' + p.TrackingNumber);
                expect(JSON.stringify(lookup)).to.be.eq(JSON.stringify(result))
            })

            it('should throws an exception if collection is empty', () => {
                let packages = [];
                expect(() => packages.toLookup(p => p.Company.substring(0, 1), p => p.Company + ' ' + p.TrackingNumber)).to.throws(TypeError, 'source or keySelector is null')
            })

            it('should throws an exception if predicate is empty', () => {
                expect(() => packages.toLookup(undefined, undefined)).to.throws(TypeError, 'source or keySelector is null')
            })

        })
    })
})

