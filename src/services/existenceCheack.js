function isTokenAlreadyExist(token, database) {

    if (database[token] === undefined)
        return false;
    else
        return true;



}
// export default isTokenAlreadyExist;
module.exports = isTokenAlreadyExist;