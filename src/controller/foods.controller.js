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

async function deleteFood (req , reply){
    try{
        const {id} = req.params;
        if(!id){
            return reply.code(400).send({
                statusCode:400,
                message:"Invalid id",
            })
        }else{
            const food = await FoodServices.deleteFoodByID(id);
            if(!food) throw new Error("Food not found");
            return reply.code(200).send({
                statusCode:200,
                message:"Food deleted successfully",
                data:food
            })
        }
    }catch{
        console.log("Error Delete Food =>" , error);
        return reply.code(500).send({
            statusCode:500,
            message:"Internal Server Error Delete Food ",
            error:error.message
        })
    }
}

async function updateFoods (req , reply){
    try{
        const {price} = req.body;
        if(!price) return reply.code(400).send({
            statusCode:400,
            message:"Price is required",
        });
        const {id} = req.params;
        if(!id) return reply.code(400).send({
            statusCode:400,
            message:"ID is required",
        });

        const matchID = await FoodServices.getFoodByID(id);
        if(!matchID) return reply.code(404).send({
            statusCode:404,
            message:"Food is not found"
        })

        const food = await FoodServices.updateFood(price ,  id);
        if(!food) throw new Error("Food not found");
        return reply.code(200).send({
            statusCode:200,
            message:"Food updated successfully",
            data:food
        });

    }catch(error){
        console.log("Error Update Food =>" , error);
        return reply.code(500).send({
            statusCode:500,
            message:"Internal Server Error Update Food ",
            error:error.message
        })
    }
}

module.exports = {
    createFood,
    getAllFoods,
    deleteFood,
    updateFoods,
}