const AsyncHandler = require("express-async-handler")
const createHttpError = require("http-errors")
const customerModel = require("../models/Customers")

const getCustomer = AsyncHandler(async(req,res,next)=>{
        
    try{
        const data = await customerModel.find()

        return res.status(200).json({
            data
        })

    }catch(err){
        throw new next(createHttpError(400,"Couldn't add Customer"))

    }

    
})
const addCustomer = AsyncHandler(async(req,res,next)=>{

    try {
        const {name,rating,description,orders} = req.body
        if(!name||!orders){
            throw new next(createHttpError(400,"invalid details"))
        }
        
        

        const data = await customerModel.create({
            name,
            rating,
            description,
            orders
        })

        return res.status(200).json({
            id : data._id,
            name : data.name,
            rating : data.rating,
            description : data.description,
            orders : data.orders
        })

    } catch (error) {
        throw new next(createHttpError(400,"Couldn't add Customer"))
    }

})

const deleteCustomer = AsyncHandler(async(req,res,next)=>{


})

module.exports = {getCustomer,addCustomer,deleteCustomer}

