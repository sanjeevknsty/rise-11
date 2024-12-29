const express = require("express")
const authToken = require("../middleware/authToken")
const { addItem, updateItem, accessMenu } = require("../controllers/menuControllers")
const router  = express.Router()


router.get('/',authToken,accessMenu)
router.post("/add",authToken,addItem)
router.put("/update",authToken,updateItem)

module.exports = router