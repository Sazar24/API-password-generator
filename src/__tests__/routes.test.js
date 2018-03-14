// import { "Coś nie pykło..." } from '../../routes/errorMessages/general';
const request = require('supertest');
const app = require('..//app');


test('odczyt tokena z adresu /api/pass/ ', async ()=>{
    // expect.assertions(1);

    // const response = await request(app).get('/api/password/ziemniak');
    // // expect(response.text).toBe('ziemniak');
    // expect(response.status).toBe(200); 
})

test('Wrong adress gives respond: status 404 ', async ()=>{
    expect.assertions(2);

    const response = await request(app).get('/api/NOT_EXISTING_ROUTE');
    expect(response.status).toBe(404);

    const response2 = await request(app).get('/');
    expect(response2.status).toBe(404);
})

//TODO: test dla wartości niezapisanej w pliku storedData.db