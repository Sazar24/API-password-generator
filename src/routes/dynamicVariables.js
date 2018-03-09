const express = require('express');
const router = express.Router();
const getTimeNow = require('../services/clock/getTimeNow');

router.use('/', function (req, res, next) {
    console.log("A new request received at " + getTimeNow());

    next();
});

router.post('/:number([0-9]{3})', function (req, res) {
    res.send(`Your number is: ${req.params.number}` );
});

router.post('/:number([0-9]{3})/:description', function (req, res) {
    res.send(`Your number is: ${req.params.number}; your description is: ${req.params.description}` );
});

router.get('/:number([0-9]{3})', function (req, res) {
    res.send(`Your number is: ${req.params.number}` );
});


router.get('/:number([0-9]{3})/:description', function (req, res) {
    res.send(`Your number is: ${req.params.number}; your description is: ${req.params.description}` );
});

// router.all('/', function(req, res){
//     res.send("invalid pattern")
// });

module.exports = router;
