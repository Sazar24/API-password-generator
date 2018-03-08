const words1 = require("../consts/passwordComponents1.js");
const words2 = require("../consts/passwordComponents2.js");
const isTokenAlreadyExist = require('./existenceCheack');

function combineKeyWords(counter, array1, array2) {
    const size1 = array1.length;
    const size2 = array2.length;
    // const sum = size1 * size2;

    let index1 = Math.floor(counter / size2);
    if (index1 > size1 - 1) index1 = size1 - 1; // blokada - osiągnieto limit haseł
    
    const index2 = counter % size2;
    // console.log(`index2 = ${index2}, index1 = ${index1}  \n`);
    
    return (array1[index1] + array2[index2]);
}

function createNewPassword(token, database) {

    const wasAlreadyDefined = isTokenAlreadyExist(token, database);

    let counterNew = 0;
    if (wasAlreadyDefined) {
        counterNew = database[token].counter;
    }
    counterNew++;

    const passwordNew = combineKeyWords(counterNew, words1, words2);

    database[token] = {
        password: passwordNew,
        counter: counterNew
    }

    // console.log(`newly generated password for ${token} is ${passwordNew}`);
    return passwordNew;
}

module.exports = createNewPassword;