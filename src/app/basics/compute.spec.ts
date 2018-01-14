import { compute } from "./compute";
describe("compute", function testCompute(){
    it("should return 0 if input is negative", function negativeTest(){
        expect(compute(-1)).toBe(0);
    });
    it("should return n+1 if n is non-negative", function nonNegativeTest(){
        expect(compute(2)).toBe(3);
    });
});