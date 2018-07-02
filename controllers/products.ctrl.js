const Product = require('../models/products.model');


const productCtrl = {
    get: (req, res) => {

        Product.find(function(error, products){

            if(error){
                res.send("Internal Server Error");
            }else{
                res.status(200);
                res.json(products);
            }
        });

    },

    getId: (req, res) => {
        
        //let id=parseInt(req.params.id);        
        let id=+req.params.id;        
        let product;

        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                product = products[i];
            }
        }

        if(product){   
            res.status(200);
            res.json(product);
        }else{
            res.status(500);
            res.send("Not Found")
        }

    },

    addProduct:(req, res)=>{
        
        products.push(req.body)
        
        res.status(201);
        res.send(req.body)
    },

    deleteProduct:(req, res)=>{
        let id = +req.params.id;

        for(let i=0; i<products.length; i++){
            if(products[i].id === id){
                products.splice(i,1);
            }
        }

        res.status(204); //No Content
        res.send();
    },

    updateProduct:(req, res)=>{
        
        let id = +req.params.id;
        let product;

        for(let i=0; i<products.length; i++){
            if(products[i].id === id){
                products[i].model = product.model;
                products[i].brand = product.brand;
                products[i].price = product.price;
                products[i].isStock = product.isStock;
            }
        }

        res.status(204); //No Content
        res.send();
    }
}


module.exports = productCtrl;