let express = require('express');
let router = express.Router();


router.use('/', function (req, res, next) {
    const dateNow = new Date();
    const nowAsString = `${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}.${dateNow.getMilliseconds()}`;
    console.log("A new request received at " + nowAsString);

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

router.all('/', function(req, res){
    res.send("invalid pattern")
});



module.exports = router;
