// const "Coś nie pykło..." = require( '../../routes/errorMessages/general');
// const mainError = require( '../../routes/errorMessages/general');

const request = require('supertest');
const app = require('../..//app');

test('Obsługa get dla: /hello (zdefiniowany jest tylko .post, .get i .all)', async () => {
    expect.assertions(1);
    
    const path = "/hello";

    const response = await request(app).get(path);
    expect(response.text).toBe("You just called the GET method at '/hello'!\n");
});

test('Obsługa get dla: /hello (zdefiniowany jest tylko .post, .get i .all)', async () => {
    expect.assertions(1);
    
    const path = "/hello/NOT_EXISTING_TARGET";

    const response = await request(app).get(path);
    // expect(response.text).toBe(mainError);
    expect(response.text).toBe("Coś nie pykło...");
});


/////////////////// 
test('Obsługa post dla: /hello (zdefiniowany jest tylko .post, .get i .all)', async () => {
    expect.assertions(1);
    const response = await request(app).post('/hello');
    expect(response.text).toBe("You just called the post method at '/hello'!\n");

});