const TokensStorage = require('../TokensStorage/TokensStorage');
const words1 = require('../../consts/passwordComponents1');
const words2 = require('../../consts/passwordComponents2');


class PasswordProvider {
    constructor() {
        this._tokenStorage = new TokensStorage();
        this._components1 = words1;
        this._components2 = words2;
    }

    async generateNextPassword(token) {
        try {
            let counter = await this._tokenStorage.getCounterValue(token)

            const password = this.combineComponents(counter, this._components1, this._components2);
            this._tokenStorage = await this._tokenStorage.save(token, counter, password);
            return password;
        }
        catch (err) {
            throw (err);
        }
    }

    combineComponents(counter, array1, array2) {
        const size1 = array1.length;
        const size2 = array2.length;
        counter = this.counterAdjust(counter, size1 * size2);

        const index1 = Math.floor(counter / size2);
        const index2 = counter % size2;

        return (array1[index1] + array2[index2]);
    }

    counterAdjust(counter, max) {
        return counter % max;
    }

}

module.exports = PasswordProvider;                              