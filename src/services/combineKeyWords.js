function counterAdjust(counter, max) {
    return counter % max;
}

function combineKeyWords(counter, array1, array2) {
    const size1 = array1.length;
    const size2 = array2.length;
    counter = counterAdjust(counter, size1 * size2);

    let index1 = Math.floor(counter / size2);

    const index2 = counter % size2;
    // console.log(`index2 = ${index2}, index1 = ${index1}  \n`);

    return (array1[index1] + array2[index2]);
}

module.exports = combineKeyWords;