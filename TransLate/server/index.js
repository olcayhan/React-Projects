const express = require('express')
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors")
const CardRouter = require("./router/CardRouter.js");
const WordRouter = require("./router/WordRouter.js");


dotenv.config()

const app = express()


app.use(cors())
app.use(express.json())
app.use("/cards", CardRouter);
app.use("/words", WordRouter);

// connection to the database
app.listen(5000, () => {
    mongoose.connect(process.env.DB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('connected to db'))
        .catch((err) => console.log(err))
})

app.get("/", (req, res) => {
    res.send("This site for backend my translate app")
})