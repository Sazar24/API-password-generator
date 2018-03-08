function saveNewPasswordLocally(database, token, password, counter) {
    database[token] = {
        password: password,
        counter: counter
    }
}

module.exports = saveNewPasswordLocally;