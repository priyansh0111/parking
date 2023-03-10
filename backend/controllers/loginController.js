const User = require('../models/userModel')
const bcrypt = require('bcrypt')

const userControl = {
    loginUser: async (req, res) => {
        try {
            const {username, password} = req.body
            console.log(username)
            const user = await User.findOne({username: username})
            if(!user) {
                res.send("No such user exists")
            } else {
                if(password == user.password) {
                    res.send("Login succesful")
                } else {
                    res.send("Wrong password")
                }
            }
        } catch (err) {
            return res.status(200).json({message: err.message})
        }
    },
    getLogin: async (req, res) => {
        res.json("Hello World")
    },
    enterDetails: async (req, res) => {
        const {username, password} = req.body
        const newUser = new User({
            username: username,
            password: password
        })
        await newUser.save()
        res.json({message: "User succesfully registered! :)"})
    }
}

module.exports = userControl