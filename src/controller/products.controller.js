const ProductServices = require("../services/products.services");

async function createProduct(req,reply){
    try{
        const {name , price , description , subTitle , tags} = req.body;
        if(!name || !price || !description || !subTitle || !tags){
            return reply.code(500).send({
                statusCode:400,
                message:"Please fill all the fields",
            });
        };
        const product = await ProductServices.createProducts({name , price ,description ,subTitle ,tags});
        if(!product) throw new Error("Product creation failed ❌");

        return  reply.code(201).send({
            statusCode:201,
            message:"Product created successfully",
            data:product,
        });

    }catch(error){
        console.log("Error create Product => " , error);
        return reply.code(500).send({
            statusCode:500,
            message:"Error create Product" ,
            error:error.message
            });
    }
};

async function getAllProduct(req , reply) {
    try{    
        const products = await ProductServices.getAllProducts();
        if(!products) throw new Error('Not Fount Products');
       return reply.code(200).send({
            statusCode:200,
            message:"Products fetched successfully",
            data:products
        })
    }catch(error){
        console.log("Error get all Products" , error);
        return reply.code(500).send({
            statusCode:500,
            message:"Server Internal Error -> Error get all Products",
            error:error.message,
        })
    }
}

async function deleteProductID (req , reply){
    try{
        const {id} = req.params;
        console.log("id-<" , id)
        if(!id) return reply.code(400).send({
            statusCode:400,
            message:"ID is Required",
        });

        const product = await ProductServices.deleteProductByID(id);
        if(!product) throw new Error("Product not found");
        return reply.code(200).send({
            statusCode:200,
            message:"Product deleted successfully",
            data:product
        });

    }catch(error){
        console.log("Error delete Product" , error);
        return reply.code(500).send({
            statusCode:500,
            message:"Server Internal Error -> Error delete Product",
        })
    }
};

async function updateProductId (req , reply){
    try{
        const {name , price } = req.body;
        const {id} = req.params;
        console.log("id" , id)
          if(!id) return reply.code(400).send({
            statusCode:400,
            message:"ID is Required",
        });

        const matchID = await ProductServices.getProductByID(id);
         if(!matchID) return reply.code(404).send({
            statusCode:404,
            message:"Product is not found"
        })

        const product = await ProductServices.updateProductByID(id , {name , price})
        if(!product) throw new Error("Product not found");
        return reply.code(200).send({
            statusCode:200,
            message:"Product updated successfully",
            data:product
        })

    }catch(error){
        console.log("Error update Product" , error);
        return reply.code(500).send({
            statusCode:500,
            message:"Server Internal Error -> Error update Product",
            error:error.message,
        })
    }
}

module.exports = {
    createProduct,
    getAllProduct,
    deleteProductID,
    updateProductId,
}