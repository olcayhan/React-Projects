const express = require("express")
const Word = require("../models/WordModel.js")
const router = express.Router()

router.post("/addword", async (req, res) => {
    try {
        console.log(req.body);
        const { english, turkish, cardID } = req.body;

        const createdWord = await Word.create({
            english,
            turkish,
            cardID
        })
        return res.status(201).json(createdWord)
    } catch (err) {
        console.log(err)
        return res.json({ message: "create card failed" })
    }

})


router.get("/getword", async (req, res) => {
    try {
        const other = await Word.find();
        return res.status(200).json({ other })

    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
})

router.post("/deleteword", async (req, res) => {
    try {
        console.log(req.body);

        const result = await Word.findByIdAndDelete({ _id: req.body.id });

        return res.send({ result })
    } catch (e) {
        return res.send({ e: e, m: "error" });
    }
})

router.post("/deleteallword", async (req, res) => {
    try {
        console.log(req.body);

        const result = await Word.deleteMany({ cardID: req.body.id });

        return res.send({ result })
    } catch (e) {
        return res.send({ e: e, m: "error" });
    }
})


module.exports = router