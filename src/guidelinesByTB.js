const express = require('express');

const saveToFileAsSting = require('../services/fileHandling/save');
const createAndSavePassword = require('./../services/createAndSavePassword.js');
const readFileAsync = require('../services/fileHandling/read');
const getTimeNow = require('../services/clock/getTimeNow');
const pathToTokensDatabase = require('../consts/paths/tokensDatabase');

const router = express.Router();

router.get('/:token', async function (req, res) {
    // let database;
    // try 
    // {
    //     database = await readFileAsync(path);
    // }
    // catch (err) 
    // { 
    //     // console.log("error on reading data from file ", err) 
    //     res.sendStatus(500);
    //     return;
    // }
    
    // const newPassword = createAndSavePassword(req.params.token, database);

    // await saveToFileAsSting(path, database);

    // res.send(`Your token is: ${req.params.token} and your new password is: ${newPassword}  ${getTimeNow()}`);
    try
    {
        const token = req.params.token;
        const password = PasswordProvider.GetNext(token);

        res.status(200).send(password);
    }
    catch (ex)
    {
        res.status(500);
    }
    
});

module.exports = router;



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
}


