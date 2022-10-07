const express = require('express')

const dotenv = require("dotenv")
const mongoose = require("mongoose")
const userRouter = require("./routes/userRouter.js")
const cors = require("cors")

dotenv.config()

const app = express()


app.use(cors())
app.use(express.json())
app.use("/users", userRouter)

// connection to the database
app.listen(5000, () => {
    mongoose.connect(process.env.DB_CONNECTION_STRING)
        .then(() => console.log('connected to db'))
        .catch((err) => console.log(err))
})

