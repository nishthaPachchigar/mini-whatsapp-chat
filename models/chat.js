const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    msg: {
        type: String,
        maxLength: 50,
    },
    created_at: {
        type: Date,
        required: true,
    },
});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = mongoose.model("Chat", chatSchema); //for exporting the file so that it can be used by the main file ie index.js