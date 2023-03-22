const addition = require("../calc");

describe("calculator", () => {
    describe("addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        })
        test("should return 73 for 41 + 32", () => {
            expect(addition(41, 32)).toBe(73);
        })   
    });
    describe("subtaction function", () => {

    });
    describe("multiplication function", () => {

    });
    describe("division function", () => {

    });
})