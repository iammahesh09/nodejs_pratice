const jwt = require('jsonwebtoken');
const config = require('../config')
var cors = require('cors')

module.exports = {
    tokenAuth:function(req, res, next) {

        let token = req.headers["authorization"];

        let result = jwt.verify(token, config.jwtPassword, function(error){
            if (error) {
                res.status(400);
                res.send("Unauthorised")
            } else {
                // res.header('Access-Control-Allow-Origin', '*');
                // res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
                // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                // res.header('Access-Control-Allow-Credentials', true);
                next();
            }
        })

    }
}
