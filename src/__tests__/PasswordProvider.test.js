const uuidv1 = require('uuid/v1');
const PasswordProviderClass = require('../services/PasswordProvider/PasswordProvider');

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
