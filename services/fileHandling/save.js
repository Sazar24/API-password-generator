const fs = require('fs');

function saveToFileAsSting(path, data) {
    fs.writeFile(path, JSON.stringify(data), (err) => {
        if (err) {
            console.log('crash on saving data to file!');
            throw err;
        }
        console.log('saved successfuly');
    });
}

module.exports = saveToFileAsSting;