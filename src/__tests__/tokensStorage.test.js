const request = require('supertest');
const app = require('..//app');
const TokensStorage = require('../services/TokensStorage/TokensStorage');

test('TokenStorage reads out the "example" property from read/stored data', async () => {
    expect.assertions(2);
    const TokensStorageTest = new TokensStorage();

    const example = await TokensStorageTest.getSingleTokenData("example"); // debilny test, ale jest środek nocy x), a ja sprawdzam tylko czy construktory się odpalają jak trzeba...

    // expect(example).toBeDefined();
    // expect(example.counter > 1).toBe(true);

    expect(example).toHaveProperty("password");
    expect(example).toHaveProperty("counter");
})
