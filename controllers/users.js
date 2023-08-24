module.exports = {
    registerUser : async(req, res) => {
        await userRegister(req.body, "user", res)
    }
}