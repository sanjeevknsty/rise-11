// const express = require('express')
const userRoute = require('./routes/userRoute.js')
const orderRoute = require("./routes/orderRoute.js")
const customerRoute = require("./routes/customerRoute.js")
const dashBoardRoute = require("./routes/dashBoardRoute.js")
const menuRoute = require("./routes/menuRoute.js")


const app = require("./api/index.js")

  

app.use('/api/auth',userRoute)
app.use('/api/orders',orderRoute)
app.use('/api/customer',customerRoute)
app.use('/api/menu',menuRoute)
app.use('/api/dashboard',dashBoardRoute)


// port = process.env.PORT || 6000
// app.listen(3000,()=>{
//   console.log('listening')
// })
 
// export default app
// module.exports = app

