// import { "Coś nie pykło..." } from '../../routes/errorMessages/general';
// const mainError = require( '../../routes/errorMessages/general');

const request = require('supertest');
const app = require('../..//app');

// test(' test 1 : 1= 1 ', () => {
//     expect(true).toBe(true);
// })

test('Błędna ścieżka z jednym niby-argumentem wywala błąd', async () => {
    expect.assertions(1);
    const response = await request(app).get('/ds');

    expect(response.text).toBe("Coś nie pykło...");
});

test('ścieżka z dwoma argumentami w URL odczytuje argumenty poprawnie', async () => {
    expect.assertions(1);
    const response = await request(app).get('/ds');

    expect(response.text).toBe("Coś nie pykło...");
});