const FoodServices = require("../services/foods.services");

async function createFood (req , reply){
    try{
        const {name , material , price} = req.body;
        if(!name || !material || !price){
            return reply.code(400).send({
                statusCode:400,
                message : "Please fill all the fields",
            });
        };

        // exist food;
        const existFood = await FoodServices.getFoodByName(name);
        if(existFood) return reply.code(409).send({statusCode:409,message:"Food is Already"})

        // create food ;
        const food = await FoodServices.createFood({name , material , price});
        if(!food) throw new Error("Food creation failed ❌");
        
        return reply.code(201).send({
            statusCode:201,
            message:"Food created Successfully ✅",
            data:food
        });

    }catch(error){
        console.log("Error create food =>" , error);
        return reply.code(500).send({
            statusCode:500,
            message:"Internal Server Error Create Food ",
            error:error.message,
        })
    }
}

async function getAllFoods (req , reply){
    try{
        const foods = await FoodServices.getAllFoods();
        if(!foods) throw new Error("No foods found");
        return reply.code(200).send({
            statusCode:200,
            message:"Get all foods is successfully",
            data:{foods}
        })
    }catch(error){
        console.log("Error get all foods =>" , error);
        return reply.code(500).send({
            statusCode:500,
            message:"Internal Server Error Get All Foods ",
            error:error.message
        })
    }
}

module.exports = {
    createFood,
    getAllFoods,
}