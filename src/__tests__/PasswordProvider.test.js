const uuidv1 = require('uuid/v1');
const request = require('supertest');
const app = require('..//app');
const PasswordProviderClass = require('../services/PasswordProvider/PasswordProvider');
const TokensStorageClass = require('../services/TokensStorage/TokensStorage');


test('new token`s password is == "A1" ', async () => {
    const newToken = uuidv1();
    const PasswordProvider = new PasswordProviderClass();

    let simulationOutput;
    try {
        simulationOutput = await PasswordProvider.generateNextPassword(newToken);
    }
    catch (err) {
        throw err;
    }

    expect(simulationOutput).toBe("A1");
})

test("new password API-request increments token`s counter by 1", async () => {
    const token = "example";
    const tokensStorage = new TokensStorageClass();
    let counterOldValue;
    let singleToken;
    try {
        singleToken = await tokensStorage.getSingleTokenData(token);
        counterOldValue = singleToken.counter;
        // console.log('++counterOldValue: ', counterOldValue);


        if (counterOldValue === undefined) {
            const PasswordProvider = new PasswordProviderClass();
            const somePassword = await PasswordProvider.generateNextPassword(token);
            singleToken = await tokensStorage.getSingleTokenData(token);
            counterOldValue = singleToken.counter;
        }

        expect.assertions(2);

        const response = await request(app).get('/api/password/example');
        expect(response.status).toBe(200);

        // TODO:
        // Nie wczytuje poprawnej wartości NOWEGO countera (ciągle jakby widzi starą)
        // edit: już wczytuje. Trzeba robić nowego storega i z niego brac funkcje... co jest dziwne... a ja idę spać...

        const tokensStorage2 = new TokensStorageClass();
        const singleToken2 = await tokensStorage2.getSingleTokenData(token);
        const counterNewValue = singleToken2.counter;
        // console.log(`${counterNewValue}  +++  ${counterOldValue} `);

        expect(counterNewValue - counterOldValue === 1).toBe(true);
    }
    catch (err) {
        throw err;
    }
})

// test("2nd version: generate-passwor-API-request")