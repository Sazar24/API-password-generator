const express = require('express');

const generatePassword = require('./routes/generatePassword.js');

const app = express();

app.use('/api/password', generatePassword);

app.all('*', function (req, res) {
    res.sendStatus(404);
});

module.exports = app; 