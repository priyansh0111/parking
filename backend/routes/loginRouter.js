const router = require('express').Router()
const loginController = require('../controllers/loginController')

router.get("/", loginController.getLogin)
router.post("/", loginController.loginUser)
router.post("/register", loginController.enterDetails)

module.exports = router