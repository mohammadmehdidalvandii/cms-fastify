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
}

module.exports = {
    createProduct,
}