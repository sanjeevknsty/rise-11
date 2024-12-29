const asyncHandler = require("express-async-handler")
const createHttpError = require("http-errors")
const menuModel = require("../models/Menu")



const accessMenu = asyncHandler(async(req,res,next) =>{
    try {
        const menu = await menuModel.find()
        console.log(menu)
        const user  = req.user
        return res.status(200).json({
            menu
        })
        
    } catch (error) {
        throw new next(createHttpError(400,"Couldn't get the Menu, right now"))
    }


})
const addItem = asyncHandler(async(req,res,next) =>{
try {
    const {name , price , profit, picture} = req.body

    if(!name || !price || !profit){
        throw new next(createHttpError(400,"provide valid details"))
    }

    const item = await menuModel.create({
        name,
        price,
        profit,
        picture
    })
    const user = req.user
    return res.status(200).json({
        user,
        _id: item._id,
        name: item.name,
        price : item.price,
        profit : item.profit,
        picture : item.picture

    })

    
} catch (error) {
    throw new next(createHttpError(400,"Couldn't add Item right now"))
}
   

    
})

const updateItem = asyncHandler(async(req,res,next) =>{
    // const id = req.params.id
    const {id,name,price,profit,picture} = req.body
    if (!id){
        throw new createHttpError(400,"Provide valid details")
    }
    const updatedItem = {name,price,profit,picture}
    try{
        let item = await menuModel.findByIdAndUpdate(id,{$set:updatedItem},{new:true})

        res.status(200).json({
            item
        })

    }
    catch(error){
        throw new next(createHttpError(400,error))
    }
})

module.exports = {addItem,updateItem,accessMenu}