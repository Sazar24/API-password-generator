const saveNewPasswordLocally = require("./savePasswordLocally");
const combineKeyWords = require("./combineKeyWords");
const isTokenAlreadyExist = require('./existenceCheack');

const words1 = require("../consts/passwordComponents1.js");
const words2 = require("../consts/passwordComponents2.js");

function createAndSavePassword(token, database) {

   const wasAlreadyDefined = isTokenAlreadyExist(token, database);

    let counter;
    if (wasAlreadyDefined) {
        counter = database[token].counter;
    } else counter = 0;
    counter++;

    const password = combineKeyWords(counter, words1, words2);

    saveNewPasswordLocally(database, token, password, counter);

    return password;
}

module.exports = createAndSavePassword;