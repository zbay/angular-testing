import { getCurrencies } from './getCurrencies';
describe("get currencies", function currencyTest(){
    it("should return the supported currencties", function checkCurrencies(){
        const result = getCurrencies();
        expect(result).toContain("USD");
        expect(result).toContain("AUD");
        expect(result).toContain("EUR");
    });
});