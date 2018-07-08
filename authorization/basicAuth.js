//Basic authorization
module.exports = {

    basicAuthentication: function (req, res, next) {

        let base64String = req.headers["authorization"].replace("Basic ", "");

        console.log(base64String)

        let decodeString = new Buffer.from(base64String, 'base64').toString();

        console.log(decodeString);

        let tokens = decodeString.split(":")

        let username = tokens[0];
        let password = tokens[1];

        if (username === "admin" && password === "password") {
            next()
        } else {
            res.status(404);
            res.send("Unauthorization")
        }
    }
}