const TokensStorage = require('../TokensStorage/TokensStorage');
const words1 = require('../../consts/passwordComponents1');
const words2 = require('../../consts/passwordComponents2');
// const combineKeyWords = require('../combineKeyWords');
const combineKeyWords = require('../combineKeyWords');


class PasswordProvider {
    // constructor(dataStorage)
    constructor() {
        this._tokenStorage = new TokensStorage();
        this._components1 = words1;
        this._components2 = words2;
    }

    async generateNextPassword(token) {
        let counter = await this._tokenStorage.getCounterValue(token)
        
        const password = combineKeyWords(counter, this._components1, this._components2);
        try {
            this._tokenStorage = await this._tokenStorage.updateTokenData(token, counter, password);
            return password;
        }
        catch (err) {
            throw ("+++Error on updatTokensData during generateNextPassword+++ ", err);
        }
    }




    // const 
    // async generateNextPasswordForToken(token) {
    //     // return kupa";

    // }

    //odczytaj plik -> zapisz wynik w tokensStorage
    //znajdź token i jego counterValue
    //odczytaj passwordComponents
    //połącz passwordComponents 
    //+zwróć wynik połączenia
    //zapisz wynik do dokensStorage (który pod spodem zapisuje to do pliku)


}

module.exports = PasswordProvider;                              