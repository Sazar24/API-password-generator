// import { mainError } from './routes/errorMessages/general';
const mainError = require('./routes/errorMessages/general');
var fs = require("fs")

let express = require('express');
let app = express();

let things = require('./routes/things.js');
let hello = require('./routes/hello.js');
let dynamicVariables = require('./routes/dynamicVariables.js');
let generatePassword = require('./routes/generatePassword.js');

app.use('/variables', function (req, res, next) {
    const dateNow = new Date();
    const nowAsString = `${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}.${dateNow.getMilliseconds()}`;
    console.log("A new request received at " + nowAsString);

    next();
});

app.use('/things', things);
app.use('/hello', hello);
app.use('/variables', dynamicVariables);
app.use('/generatepassword', generatePassword);

app.all('*', function (req, res) {
    res.send("Coś nie pykło...");
});

module.exports = app;