const jwt = require('jsonwebtoken');
const config = require('../config')

module.exports = {
    tokenAuth:function(req, res, next) {

        let token = req.headers["authorization"];

        let result = jwt.verify(token, config.jwtPassword, function(error){
            if (error) {
                res.status(400);
                res.send("Unauthorised")
            } else {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
                res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
                res.setHeader('Access-Control-Allow-Credentials', true);
                next();
            }
        })

    }
}
