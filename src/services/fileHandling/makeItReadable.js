function makeItReadable(data) {  //adjustment for human-readers; //originally designed for storedData.db
    let newString = data;
    newString = newString.replace('{"', '{\n"');    // first line only
    newString = newString.replace(/},/g, "},\n\n");
    newString = newString.replace(/","/g, '",\n\t"');
    newString = newString.replace(/:{/g, ":\n\t{");
    newString = newString.replace('}}', '}\n}');    // last line only

    return newString;
};

module.exports = makeItReadable;