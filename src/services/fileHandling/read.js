const fs = require('fs');

async function readFileAsPromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, function (err, data) {
            if (err) {
                return console.error(err);
                reject("error! <-w funkcji readFileAsPromise\n");
            } else {
                resolve(JSON.parse(data));
            }
        })
    })
}

module.exports = readFileAsPromise;