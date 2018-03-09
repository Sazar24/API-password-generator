const fs = require('fs');

function makeItReadable(data) {  //adjustment for human-readers; //originally designed for storedData.db
    let newString = data;
    newString = newString.replace('{"', '{\n"');    // first line only
    newString = newString.replace(/},/g, "},\n\n");
    newString = newString.replace(/:{/g, ":\n\t{");
    newString = newString.replace('}}', '}\n}');    // last line only
    console.log(newString);

    return newString;
};

function saveToFileAsSting(path, dataToSave) {
    let data = JSON.stringify(dataToSave);
    data = makeItReadable(data);

    fs.writeFile(path, data, (err) => {
        if (err) {
            console.log('crash on saving data to file!');
            throw err;
        }
        console.log('saved successfuly');
    });
}

module.exports = saveToFileAsSting;