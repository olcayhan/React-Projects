const { default: mongoose } = require("mongoose");



const wordSchema = mongoose.Schema({

    english: {
        type: String,
        required: true
    },
    turkish: {
        type: String,
        required: true
    },
    cardID: {
        type: String,
        required: true
    }
}, { collection: "words" })
module.exports = mongoose.model("Word", wordSchema)


