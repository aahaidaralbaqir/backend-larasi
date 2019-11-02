const router = require('express').Router()
const { 
    register,
    login
 } = require('../controllers/userController')

router.get('/',(req,res) => {
    res.status(200).json({
        message : "connected to server with port 5000"
    })
})

router.post("/register",register)
router.post("/login",login)

module.exports = router