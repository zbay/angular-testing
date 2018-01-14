import { greet } from "./greet";
describe("greet", function testGreet(){
    it("should include name in the message", function testNameInMessage(){
        const greeting = greet("Zach");
        expect(greeting).toBe("Welcome Zach");
        expect(greeting).toContain("Zach"); // more general, less fragile version of the prior test
    });
});