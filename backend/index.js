const express = require('express')
var cors = require('cors')
const dotenv = require('dotenv')
const userRoute = require('./routes/userRoute.js')
const orderRoute = require("./routes/orderRoute.js")
const customerRoute = require("./routes/customerRoute.js")
const dashBoardRoute = require("./routes/dashBoardRoute.js")
const menuRoute = require("./routes/menuRoute.js")
dotenv.config()


const connectionToMongoose = require('./db.js')
connectionToMongoose()

const app = express() 

dotenv.config({ path: `${__dirname}/.env` });


app.use(cors())
app.use(express.json())
 


// console.log(authRoute)

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

// app.use('/api/auth',require('./routes/auth.js'))
// app.use('/api/note',require('./routes/note.js'))
port = process.env.PORT || 6000
app.listen(port,()=>{
  console.log('listening',port)
})
