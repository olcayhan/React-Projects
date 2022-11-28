const express = require("express")
const Card = require("../models/CardModel.js")
const router = express.Router()

router.post("/addcard", async (req, res) => {
    try {
        console.log(req.body);
        const { name, desc } = req.body;

        const createdCard = await Card.create({
            name,
            desc
        })
        return res.status(201).json(createdCard)
    } catch (err) {
        console.log(err)
        return res.json({ message: "create card failed" })
    }

})


router.get("/getcard", async (req, res) => {
    try {
        const other = await Card.find();
        return res.status(200).json({ other })

    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
})


router.post("/deletecard", async (req, res) => {
    try {
        console.log(req.body);

        const result = await Card.findByIdAndDelete({ _id: req.body.id });

        return res.status(200).send({ result })
    } catch (e) {
        return res.status(400).send({ e: e, m: "error" });
    }
})

module.exports = router