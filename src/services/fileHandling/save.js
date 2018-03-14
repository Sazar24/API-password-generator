const fs = require('fs');
const getTimeNow = require('../clock/getTimeNow');

async function saveToFileAsSting(path, dataToSave) {
    let data = JSON.stringify(dataToSave);

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


