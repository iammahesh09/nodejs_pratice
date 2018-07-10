const userService = require('../services/user.services');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config')

class userCtrl {
    async register(req, res) {
        try {

            let hashedPwd = bcrypt.hashSync(req.body.password, 2);
            req.body.password = hashedPwd;

            await userService.registration(req.body)
            res.status(200);
            res.send("successfully registered")
        } catch (error) {
            if (error.errmsg.indexOf("duplicate key error") > -1) {
                res.status(400);
                res.send("Username already exists")
            } else {
                res.status(500);
                res.send(error)
            }
        }
    }

    async login(req, res) {

        let user = await userService.login(req.body.username);
        let result = bcrypt.compareSync(req.body.password, user.password)

        if (result) {

            let token = jwt.sign( { username: req.body.username }, config.jwtPassword, { expiresIn: '1h' });

            var response = {
                username: req.body.username,
                token: token
            }
            res.status(200);
            res.json(response)

        } else {
            res.status(400);
            res.send("Unauthorised access")
        }


    }
}

module.exports = new userCtrl();