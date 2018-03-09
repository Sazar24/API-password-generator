const fs = require('fs');
const makeItReadable = require('./makeItReadable');
const getTimeNow = require('../clock/getTimeNow');

async function saveToFileAsSting(path, dataToSave) {
    let data = JSON.stringify(dataToSave);
    data = makeItReadable(data);

    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                console.log('crash on saving data to file! ', err);
                reject(err);
            } else {
                console.log('saved successfuly', getTimeNow());
                resolve();
            }
        })
    })
}

module.exports = saveToFileAsSting;