const express = require("express")
const authToken = require("../middleware/authToken")
const { getCustomer, addCustomer, deleteCustomer } = require("../controllers/customerControllers")
// const { accesschat, fetchchats, groupChat, rename, addUserToGroup, deleteUser } = require("../controllers/chatController")
const router  = express.Router()


router.get('/',authToken,getCustomer)
router.post("/add",authToken,addCustomer)
router.delete("/delete",authToken,deleteCustomer)

module.exports = router