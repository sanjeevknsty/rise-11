const mongoose = require("mongoose")
const dotenv = require('dotenv'); 
// dotenv.config()
dotenv.config({ path: "./.env" });

const connectToMongoose =async ()=>{

  try{
    const connect = await mongoose.connect(process.env.MONGO_URI,
    //     {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // // useFindAndModify: true,
    // }

    
);
    console.log(`mongoose connected${connect.connection.host}`)

  }
  catch(err){ 
    console.log("error :",err.message)
    process.exit()
  }

}


module.exports= connectToMongoose