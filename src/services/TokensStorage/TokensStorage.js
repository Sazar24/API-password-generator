const FilesHandler = require('../FilesHandler/FilesHandler');

class TokensStorage {
    constructor() {
        this._data = undefined;
    }

    async initIfNeccessary() {          // pseudo-constructor :/
        if (this._data === undefined) {
            try {
                this._data = await new FilesHandler().readFile();
            } catch (e) {
                throw (e);
            }
        }
    }

    async getData() {
        await this.initIfNeccessary();
        return this._data;
    }

    async getSingleTokenData(token) {
        await this.initIfNeccessary();
        return this._data[token];
    }

    async save(token, counter, password) {
        await this.initIfNeccessary();  //to teoretycznie nie jest tu potrzebne (bo to wynika z algorytmu, aaaale... może kiedyś na wyższym poziomie coś zmienię, to niech to tu już zostanie.)
        if (this._data[token] === undefined)
            this._createNewTokenData(token, password);

        this._data[token] = { "counter": counter + 1, "password": password }

        try {
            await this.saveStorageToFile(this._data);
        }
        catch (err) {
            throw ("coudnt save the TokensStorage to file", err);
        }
    }

    _createNewTokenData(token, password = "not-set,yet") {
        this._data[token] = { "counter": 1, "password": password };
    }

    async getCounterValue(token) {
        await this.initIfNeccessary();

        if (this._data[token] === undefined)
            this._createNewTokenData(token);

        return this._data[token].counter;
    }

    async saveStorageToFile() {
        try {
            await new FilesHandler().saveFile(this._data);
        }
        catch (err) {
            throw (err);
        }
    }



}


module.exports = TokensStorage;