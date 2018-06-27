var productCtrl = {
    get:function(req, res){

        var products = [
            {id:100, brand:"Nokia", model:'8', price:799, isStock:true},
            {id:200, brand:"Oneplus", model:'6', price:699, isStock:true},
            {id:300, brand:"Apple", model:'X', price:949, isStock:true},
            {id:400, brand:"Samsung", model:'S8', price:899, isStock:true}
        ]

        res.json(products)

    }
}


module.exports = productCtrl;

