let express = require('express');
let router = express.Router();
// let database = require('./../database/passwords.js');
const createNewPassword = require('./../services/generateNextPass.js');
const fs = require('fs');

const path = './database/storedData.db';

// function readDatabaseFromFile() {
//     fs.readFile(path, function (err, data) {
//         if (err) {
//             return console.error(err);
//         } else {
//             const database = JSON.parse(data.toString());
//             console.log('database inside file-read-function: ', database);

//             return database;
//         }
//     });
// }

async function readFileAsPromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, function (err, data) {
            if (err) {
                // return console.error(err);
                reject("error! <-w funkcji readFileAsPromise\n");
            } else {
                resolve(JSON.parse(data));
            }
        })
    })
}


router.get('/:token', async function (req, res) {

    let database;

    try {
        database = await readFileAsPromise(path);
    } catch (e) {
        console.log("eeeerrrrroooor ", e);
    }
    const newPassword = createNewPassword(req.params.token, database);
    console.log('new password: ', newPassword);

    fs.writeFile(path, JSON.stringify(database), (err) => {
        if (err) {
            console.log('crash on saving data to file!');
            throw err;
        }

        console.log('saved to file');
    });
    // ///////////
    res.send(`Your token is: ${req.params.token} ` +
        `and your new password is: ${newPassword}`);
});


router.all('/', function (req, res) {
    res.send("invalid pattern; Reinstall Universe")
});

module.exports = router;
