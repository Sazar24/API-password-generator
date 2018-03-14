const express = require('express');
const router = express.Router();
const TokensStorageClass = require('../services/TokensStorage/TokensStorage');
const PasswordProviderclass = require('../services/PasswordProvider/PasswordProvider');


router.get('/:token', async function (req, res) {
    // const TokenStorage = new TokensStorageClass();
    const PasswordProvider = new PasswordProviderclass();

    try {
        // const text = await TokenStorage.getData();
        // const token = req.params.token;
        // const counterOfToken = await TokenStorage.getTokensCounterValue(token);
        
        // const textRespond = `Your token is: ${req.params.token} and your new password is: ${newPassword}  ${getTimeNow()}`;
        
        const token = req.params.token;
        const password = await PasswordProvider.generateNextPassword(token);


        res.status(200).send(`${token} ... ${password}`);
    }
    catch (ex) {
        res.sendStatus(500);
        throw ex;
    }
});

module.exports = router;


/*
class PasswordProvider
{
    constructor(_tokensStorage: TokensStorage)
    { }

    GetNext(token)
    {
        entry: Entry|null = _tokensStorage.FindByToken(token)
        if (entry==null)
        {
            _tokensStorage.Add(token);
        }
        else
        {
            counter = entry.counter;
            counter++;
            _tokensStorage.Update(token, counter);
        }
        password = _passwordGenerator.Generate(counter)
        return password;
    }
}


class TextFileStorage
{
    FILE = 'path/to/file';

    Read()
    {

    }

    Write(path, text)
    {

    }
}


class TokensStorage
{
    constructor(_textFileStorage: TextFileStorage)
    { }

    Add(token)
    {

    }

    FindByToken(token): Entry|null
    {
        text = _textFileStorage.Read();
        entries = JSON.parse(text);
        return entries.find(...by token;
    }
}

class Entry
{
    token: string;
    counter: number;
}*/