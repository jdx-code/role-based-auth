const router = require("express").Router()
const { userRegister, userLogin, userAuth } = require('../utils/Auth')
const userController = require('../controllers/users')

// Users registration route
// router.post('/register-user', async(req, res) => {
//     await userRegister(req.body, "user", res)
// })

router.post('/register-user', userController.registerUser)

// Admin registration route
router.post('/register-admin', async(req, res) => {
    await userRegister(req.body, "admin", res)
})

// Superadmin registration route
router.post('/register-super-admin', async(req, res) => {
    await userRegister(req.body, "superadmin", res)
})

// Users login route
router.post('/login-user', async(req, res) => {
    await userLogin(req.body, "user", res)
})

// Admin login route
router.post('/login-admin', async(req, res) => {
    await userLogin(req.body, "admin", res)
})

// Superadmin login route
router.post('/login-super-admin', async(req, res) => {
    await userLogin(req.body, "superadmin", res)
})

// Profile route
router.get('/profile', userAuth, async(req, res) => {
    return res.json("Hello")
})

// Users protected route
router.post('/user-protected', async(req, res) => {})

// Admin protected route
router.post('/admin-protected', async(req, res) => {})

// Superadmin protected route
router.post('/super-admin-protected', async(req, res) => {})

module.exports = router