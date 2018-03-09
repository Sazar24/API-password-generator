function isTokenAlreadyExist(token, database) {
    if (database[token] === undefined)
        return false;
    else
        return true;
}
module.exports = isTokenAlreadyExist;