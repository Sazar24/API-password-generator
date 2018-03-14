const fs = require('fs-extra');
const pathToTokensDatabase = './src/database/storedData.db';


class FilesHandler {

    async tokensDatabaseFileExists() {
        try {
            const pathExists = await fs.pathExists(pathToTokensDatabase);
            return pathExists;
        }
        catch (err) {
            console.log('ERROR lub plik nie istnieje ? ');
            throw (err)
        }
    }

    async readFile() {
        try {
            const dataExtracted = await fs.readJson(pathToTokensDatabase)
            return dataExtracted;
        } catch (err) {
            throw err;
        }
    }

    //f:save data
    async saveFile(data) {
        try {
            await fs.writeJson(pathToTokensDatabase, data)
            console.log('success on writing data')
        } catch (err) {
            console.error("kupa!", err)
            throw err;
        }
    }
}


module.exports = FilesHandler;