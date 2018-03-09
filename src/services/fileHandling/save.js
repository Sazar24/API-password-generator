const fs = require('fs');

function makeItReadable(data) {  //adjustment for human-readers; //originally designed for storedData.db
    let newString = data;
    newString = newString.replace('{"', '{\n"');    // first line only
    newString = newString.replace(/},/g, "},\n\n");
    newString = newString.replace(/","/g, '",\n\t"');
    newString = newString.replace(/:{/g, ":\n\t{");
    newString = newString.replace('}}', '}\n}');    // last line only

    return newString;
};

async function saveToFileAsSting(path, dataToSave) {
    let data = JSON.stringify(dataToSave);
    data = makeItReadable(data);

    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                console.log('crash on saving data to file!', err);
                reject(err);
            } else {
                console.log('saved successfuly');
                resolve();
            }
        })
    })
}

module.exports = saveToFileAsSting;