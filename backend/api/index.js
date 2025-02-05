const express = require("express");
const app = express();
const dotenv = require('dotenv')
const connectionToMongoose = require('../db.js')
// dotenv.config('../.env')
// dotenv.config({ path: `${__dirname}/.env` });
dotenv.config({ path: "../.env" });



const userRoute = require('../routes/userRoute.js')
const orderRoute = require("../routes/orderRoute.js")
const customerRoute = require("../routes/customerRoute.js")
const dashBoardRoute = require("../routes/dashBoardRoute.js")
const menuRoute = require("../routes/menuRoute.js")


var cors = require('cors')

app.use(cors())
app.use(express.json())

connectionToMongoose()


app.get('/',(req,res)=>{
    res.json({
      message :  "Hello from backend"
    })
  })


  app.use('/api/auth',userRoute)
  app.use('/api/orders',orderRoute)
  app.use('/api/customer',customerRoute)
  app.use('/api/menu',menuRoute)
  app.use('/api/dashboard',dashBoardRoute)

port = process.env.PORT || 6000

app.listen(port,()=>{
  console.log('listening',port)
})
 
module.exports = app;


