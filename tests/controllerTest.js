const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI')
const EVENING_GREETING = "Guten Abend";
const MORNING_GREETING = "Guten Morgen";
describe("celsiusToFahrenheit()", function () {
    it("converts 0 C to 32 F", function () {
        expect(apiTemperature.celsiusToFahrenheit(0)).to.equal(32);
    });
    it("converts 100 C to 212 F", function () {
        expect(apiTemperature.celsiusToFahrenheit(100)).to.equal(212);
    });
    it("converts -40 C to -40 F", function () {
        expect(apiTemperature.celsiusToFahrenheit(-40)).to.equal(-40);
    });
});

describe("fahrenheitToCelsius()", function () {
    it("converts 32 F to 0 C", function () {
        expect(apiTemperature.fahrenheitToCelsius(32)).to.equal(0);
    });
    it("converts 212 F to 100 C", function () {
        expect(apiTemperature.fahrenheitToCelsius(212)).to.be.closeTo(100, 1e-9);
    });
    it("converts -40 F to -40 C", function () {
        expect(apiTemperature.fahrenheitToCelsius(-40)).to.be.closeTo(-40, 1e-9);
    });
});

describe("getGreetingDependOnTime()", function () {
    const at = (h, m) => new Date(2020, 0, 1, h, m);

    it("greets 'Guten Morgen' in the morning", function () {
        expect(apiTemperature.getGreetingDependOnTime(at(8, 30))).to.equal(MORNING_GREETING);
    });
    it("greets 'Guten Morgen' at midday", function () {
        expect(apiTemperature.getGreetingDependOnTime(at(12, 0))).to.equal(MORNING_GREETING);
    });
    it("greets 'Guten Abend' late in the evening", function () {
        expect(apiTemperature.getGreetingDependOnTime(at(23, 15))).to.equal(EVENING_GREETING);
    });
    it("greets 'Guten Abend' at exactly 22:00", function () {
        expect(apiTemperature.getGreetingDependOnTime(at(22, 0))).to.equal(EVENING_GREETING);
    });
});
