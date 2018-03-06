import { mainError } from '../../routes/errorMessages/general';

const request = require('supertest');
const app = require('../..//app');

test('expect sth to be sth...', async () => {
    expect.assertions(3);

    const response = await request(app).get('/variables/TU_POWINNY_BYC_CYFERKI');
    expect(response.text).toBe(mainError);
    
    const response2 = await request(app).get('/variables/a@123rfsd0');
    expect(response2.text).toBe(mainError);
    
    const correctNumber = 124;
    const response3 = await request(app).get(`/variables/${correctNumber}`);
    expect(response3.text).toBe(`Your number is: ${correctNumber}`);
    
});