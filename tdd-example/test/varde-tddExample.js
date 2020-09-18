var assert = require("assert");

describe("String#split", function() {
    it("should return an array of fruits", function() {
        assert(Array.isArray('Banana, Mango, Grapes'.split(',')));
    });
});
