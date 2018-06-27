class defaultCtrl {
    get(req, res) {
        res.status(200);
        res.send("Hello! ExpressJS ");
    }
}

//Create Object
module.exports = new defaultCtrl();