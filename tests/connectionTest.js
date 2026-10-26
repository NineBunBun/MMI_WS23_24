const supertest = require('supertest');
const server = require('../index');
const chai = require('chai');
chai.should();
const api = supertest.agent(server);

describe("GET /", function () {
    it("serves the calculator homepage", async function () {
        const res = await api.get('/');
        res.status.should.equal(200);
        res.headers['content-type'].should.contain('text/html');
    });
});

describe("POST /api/fromCelsiusToFahrenheit", function () {
    it("converts 100 C to 212 F (json)", async function () {
        const res = await api.post('/api/fromCelsiusToFahrenheit').send({temperature: 100});
        res.status.should.equal(200);
        res.body.result.should.equal(212);
    });
    it("converts 0 C to 32 F (urlencoded)", async function () {
        const res = await api.post('/api/fromCelsiusToFahrenheit').type('form').send({temperature: 0});
        res.status.should.equal(200);
        res.body.result.should.equal(32);
    });
});

describe("POST /api/fromFahrenheitToCelsius", function () {
    it("converts 212 F to 100 C (json)", async function () {
        const res = await api.post('/api/fromFahrenheitToCelsius').send({temperature: 212});
        res.status.should.equal(200);
        res.body.result.should.be.closeTo(100, 1e-9);
    });
    it("converts 32 F to 0 C", async function () {
        const res = await api.post('/api/fromFahrenheitToCelsius').send({temperature: 32});
        res.status.should.equal(200);
        res.body.result.should.equal(0);
    });
});
