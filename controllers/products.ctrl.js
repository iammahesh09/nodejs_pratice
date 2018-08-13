
const productService = require('../services/product.services');
const reviewService = require('../services/review.services');

const productCtrl = {
    get: async (req, res) => {

        try{
            let products = await productService.getProduct();
            for(let i=0; i < products.length; i++){
                let product = products[i];
                if(product.modelImage){

                    //Option-1 -> product.modelImage = "http://localhost:9001/"+product.modelImage;
                    //Option-2 -> product.modelImage = product.modelImage? "http://localhost:9001/"+product.modelImage:"";
                    //Option-3 -> product.modelImage = product.modelImage ? req.protocol + "://" + req.get('host') + "/" + product.modelImage:"";
                    //Option-4 -> product.modelImage = product.modelImage ? `${req.protocol}://${req.get('host')}/${product.modelImage}` : "";
                    //Option-5 -> product.modelImage = `${req.protocol}://${req.get('host')}/${product.modelImage}`;
                    product.modelImage = `${req.protocol}://${req.get('host')}/${product.modelImage}`;
                    
                }
            }
            res.status(200).json(products)
        }
        catch(err){
            res.status(500).send("Internal Server Error")
        }
    },

    getId: async (req, res) => {

        try{
            let id = req.params.id;
            let product = await productService.getProductId(id);
            let reviews = await reviewService.readReviews(id);

            //immutable
            let jsonProduct = product.toJSON();
            
            let rating = await reviewService.avgRating(id);
            if(rating && rating.length > 0)
                jsonProduct.avgRating = rating[0].avgRating;

            jsonProduct.reviews=reviews;

            if(jsonProduct.modelImage) 
                jsonProduct.modelImage = `${req.protocol}://${req.get('host')}/${jsonProduct.modelImage}`;

            res.status(200);
            res.json(jsonProduct);

        }
        catch(error){
            res.status(500).send("Internal Server error")
        }

    },

    addProduct: async (req, res) => {

        try{
            let saveProduct =await productService.createProduct(req.body)
            res.status(201).json(saveProduct)
        }
        catch(error){
            res.status(500).send(error)
        }
    },

    deleteProduct: async (req, res) => {
        try{
            let id = req.params.id;

            let rmProduct =await productService.removeProduct(id)
            res.status(204).send(rmProduct)
        }
        catch(error){
            res.status(500).send("Internal Server Error")
        }
    },

    updateProduct:async (req, res) => {

        try{
            let id = req.params.id;

            let product = await productService.updateProduct(id, req.body)
            res.status(200);
            res.send(product)
        }
        catch(error){
            res.status(204); //No Content
            res.send(error);
        }

    },

    patchData:async (req, res) => {

        let id = req.params.id;
        delete req.body._id;
        await productSvc.patch(id, req.body);
        res.status(204).send();
    }

}


module.exports = productCtrl;