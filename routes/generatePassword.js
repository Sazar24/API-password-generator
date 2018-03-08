const express = require('express');
const saveToFileAsSting = require('../services/fileHandling/save');
const createAndSavePassword = require('./../services/generateNextPass.js');
const readFileAsPromise = require('../services/fileHandling/read');
const path = require('../consts/pathToFile');

const router = express.Router();

router.get('/:token', async function (req, res) {
    let database;

    try {
        database = await readFileAsPromise(path);
    } catch (err) { console.log("error on reading data from file ", err) }

    const newPassword = createAndSavePassword(req.params.token, database);

    saveToFileAsSting(path, database);

    res.send(`Your token is: ${req.params.token} and your new password is: ${newPassword}`);
});

module.exports = router;
