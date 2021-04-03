const map = require('./map');

describe('Map', () => {
    it('Map of ([], cube) is []', () => {

        expect(map([],"cube")).toEqual([]);
    })

    it('Map of ([1,2,3], identity) is [1,2,3]', () => {
            expect(map([1,2,3],"identity")).toEqual([1,2,3]);
    })

    it('Map of ([1,2,3], cube]) is [1,8,27]', () => {
            expect(map([1,2,3],"cube")).toEqual([1,8,27]);
    })

//    it('Map of ([a{x : 10}],someObject) is [11]', () => {
//            expect(map([a{x : 10}],"someObject")).toEqual([11]);
//        })
})