const combineKeyWords = require("./combineKeyWords");

const saveNewPasswordLocally = require("./savePasswordLocally");

const words1 = require("../consts/passwordComponents1.js");
const words2 = require("../consts/passwordComponents2.js");
const isTokenAlreadyExist = require('./existenceCheack');


function createNewPassword(token, database) {

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

module.exports = createNewPassword;