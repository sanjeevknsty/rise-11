const express = require("express")
const authToken = require("../middleware/authToken")
const { accessOrders, addOrder, updateOrder, deleteOrder } = require("../controllers/orderControllers")
const { updateItem } = require("../controllers/menuControllers")
const router  = express.Router()


router.get('/',authToken,accessOrders)
router.post("/add",authToken,addOrder)
router.put("/update",authToken,updateOrder)
router.put("/delete",authToken,deleteOrder)

module.exports = router