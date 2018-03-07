let express = require('express');
let router = express.Router();
let database = require('./../database/passwords.js');
const createNewPassword = require('./../services/generateNextPass.js');

router.get('/:token', function (req, res) {
    
    const newPassword = createNewPassword(req.params.token, database);

    console.log("\nfull: ",database);
    

    res.send(`Your token is: ${req.params.token} `+
            `and your new password is: ${newPassword}`);
});


router.all('/', function(req, res){
    res.send("invalid pattern; Reinstall Universe")
});



module.exports = router;
