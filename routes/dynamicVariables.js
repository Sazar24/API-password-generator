let express = require('express');
let router = express.Router();


router.post('/:number', function (req, res) {
    res.send(`Your number is: ${req.params.number}` );
});

router.post('/:number/:description', function (req, res) {
    res.send(`Your number is: ${req.params.number}; your description is: ${req.params.description}` );
});

router.get('/:number', function (req, res) {
    res.send(`Your number is: ${req.params.number}` );
});

router.get('/:number/:description', function (req, res) {
    res.send(`Your number is: ${req.params.number}; your description is: ${req.params.description}` );
});

router.all('/', function(req, res){
    res.send("it shoudnt work!")
});

module.exports = router;
