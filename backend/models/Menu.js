const mongoose = require("mongoose")

const menuSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    price:{
        type : Number,
        required : true
    },
    profit :{
        type : Number,
        required :true
    },
    picture : { 
        type : String
    }
},{
    timestamps : true
})

const menuModel = mongoose.model("menu",menuSchema)

module.exports = menuModel