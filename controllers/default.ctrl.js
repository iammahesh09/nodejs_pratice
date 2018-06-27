class defaultCtrl {
    get(req, res) {
        res.send("Hello! ExpressJS");
    }
}

//Create Object
module.exports = new defaultCtrl();

