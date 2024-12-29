const mongoose  =require("mongoose")

const customerSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    orders : 
        [{type : mongoose.Schema.Types.ObjectId,
        ref : "menu"}]
    ,
    description :{
        type : String,
        default : " "
    },
    rating : {
        type : Number,
        required : true,
        default :0
    }
},{
    timestamps : true
})

const customerModel = mongoose.model("customer",customerSchema)

module.exports = customerModel