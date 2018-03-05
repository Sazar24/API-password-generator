let express = require('express');
let router = express.Router();

// .../hello/ 

router.post('/', function (req, res) {
    res.send("You just called the post method at '/hello'!\n");
});

router.get('/', function (req, res) {
    res.send("You just called the GET method at '/hello'!\n");
});

router.all('/', function(req, res){
    res.send("wywołanie all (inne niż post) - dla things")
});

module.exports = router;
// export default router;