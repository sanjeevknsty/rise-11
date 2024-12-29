const createHttpError = require("http-errors")
const asyncHandler = require("express-async-handler")
const customerModel = require("../models/Customers")

const accessOrders = asyncHandler(async(req,res,next) =>{
    try {
        const data = await customerModel.find({},{orders : 1}).populate("orders");
        return res.status(200).json(data);
        
    } catch (error) {
        throw new next(createHttpError(400,"Couldn't get Orders"))
    }
})

const addOrder  = asyncHandler(async(req,res,next) =>{

    try {
        const {name,orders} = req.body
        if(!name|| !orders){
            throw new next(createHttpError(400,"provide proper details"))
        }

        const data = await customerModel.create({
            name,
            // rating ,
            // description ,
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
        throw new next(createHttpError(400,error))
    }
    
    
})
const updateOrder  = asyncHandler(async(req,res,next) =>{
    
    try {
        const {id,newItem} = req.body
        if(!id || !newItem){
            throw new next(createHttpError(400,"provide full details"))
        }

        const data = await customerModel.findByIdAndUpdate({id},{orders : newItem},{new:true})

        res.status(200).json({
            order : data.orders
        })

        
    } catch (error) {
        throw new next(createHttpError(400,error))
    }

})
const deleteOrder  = asyncHandler(async(req,res,next) =>{
    
})

module.exports = {accessOrders,addOrder,updateOrder,deleteOrder}