const express = require("express")
const User = require("../models/userModel.js")
const bcryptjs = require("bcryptjs")
const router = express.Router()

let mail;
router.post("/signup", async (req, res) => {
    try {
        console.log(req.body);
        const { fullname, password, phoneNumber, email, todos } = req.body

        const userExists = await User.findOne({ email })
        if (userExists) return res.status(400).json({ message: "User already exist" })

        const hashedPassword = await bcryptjs.hash(password, 10)

        const createdUser = await User.create({
            fullname,
            email,
            password: hashedPassword,
            phoneNumber,
            todos,
        })
        return res.status(201).json(createdUser)
    } catch (err) {
        console.log(err)
        return res.json({ message: "create user failed" })
    }

})

router.post("/signin", async (req, res) => {
    try {
        console.log(req.body);

        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) return res.status(400).json({ message: "user does not exist" })
        mail = email

        const isPasswordCorrect = await bcryptjs.compare(password, user.password)
        if (!isPasswordCorrect) return res.status(400).json({ message: "Wrong Password" })

        return res.status(200).json({ user, message: "Authentication successful" })

    } catch (err) {
        return res.status(400).json({ message: err.message })
    }

})

router.post("/home", async (req, res) => {
    try {

        const { email, todos } = req.body

        // Update the database
        const filter = { email: email }

        const updateDoc = {
            $set: {
                todos: todos
            },
        };


        const result = await User.updateOne(filter, updateDoc);

        return res.status(200).json(req.body)

    } catch (err) {
        return res.status(400).json({ message: err.message })
    }

})

router.get("/home", async (req, res) => {
    try {
        const other = await User.find({ email: mail });
        return res.status(200).json({ other })

    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
})

module.exports = router

