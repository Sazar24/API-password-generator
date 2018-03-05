// import { mainError } from './routes/errorMessages/general';
// const mainError = require('./routes/errorMessages/general');


let express = require('express');
let app = express();

let things = require('./routes/things.js');
let hello = require('./routes/hello.js');
let dynamicVariables = require('./routes/dynamicVariables.js');



app.use('/things', things);
app.use('/hello', hello);
app.use('/variables', dynamicVariables)
 
app.all('*', function (req, res) {
    res.send("Coś nie pykło...");
    // res.send(mainError);     //jeśli robię importa, testy nie działają :/
});

module.exports = app;