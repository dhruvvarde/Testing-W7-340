var fruits = require("../varde-fruits");
var chai = require("chai");
var assert = chai.assert;

describe("fruits", function() {
    it("should return an array of fruits", function() {
        var f = fruits('Banana,Mango,Papaya,Gauvava');
        assert(Array.isArray(f));
    });
});