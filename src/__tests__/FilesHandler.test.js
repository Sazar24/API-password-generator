const request = require('supertest');
const app = require('..//app');
const FilesHandlerClass = require('..//services/FilesHandler/FilesHandler');

const FilesHandler = new FilesHandlerClass();

test('TokensDatabase-File exists at given path', async () => {

    const simulationEffect = await FilesHandler.tokensDatabaseFileExists();
    
    expect(simulationEffect).toBe(true);
});

test('TokensDatabase-File reads successfuly', async () => {
    const simulationEffect = await FilesHandler.readFile();

     expect(simulationEffect).toBeDefined();
})

// test('TokensDatabase-File ', async () => {

// })