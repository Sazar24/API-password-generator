const fs = require('fs');
const express = require('express');

const dynamicVariables = require('./routes/dynamicVariables.js');
const generatePassword = require('./routes/generatePassword.js');

const things = require('./routes/things.js');
const hello = require('./routes/hello.js');
const mainError = require('./routes/errorMessages/general');
const app = express();

app.use('/things', things);
app.use('/hello', hello);
app.use('/variables', dynamicVariables);
app.use('/generatepassword', generatePassword);

app.all('*', function (req, res) {
    res.send(mainError);
});

module.exports = app;