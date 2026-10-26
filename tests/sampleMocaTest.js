const expect = require('chai').expect;

//Sample JUnit test
function sum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}

describe('#sum()', function () {

    //  if needed logic before each test run
    beforeEach(function () {

    })

    // test a functionality
    it('should add numbers', function () {
        expect(sum([1, 2, 3, 4, 5])).to.equal(15);
    })

    it('should return 0 for an empty array', function () {
        expect(sum([])).to.equal(0);
    })

    it('should return the element for a single-element array', function () {
        expect(sum([7])).to.equal(7);
    })

    it('should handle negative numbers', function () {
        expect(sum([-1, -2, -3])).to.equal(-6);
        expect(sum([5, -5])).to.equal(0);
    })

    it('should handle decimal numbers', function () {
        expect(sum([0.5, 0.25, 0.25])).to.equal(1);
    })

    it('should not modify the input array', function () {
        const arr = [1, 2, 3];
        sum(arr);
        expect(arr).to.deep.equal([1, 2, 3]);
    })

    it('should throw when called without an array', function () {
        expect(() => sum()).to.throw(TypeError);
    })
});
