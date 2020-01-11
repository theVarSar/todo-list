const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
    id: Number,
    text: {
        type: String,
        required: [true, "Text is require"]
    }   
});

const List = mongoose.model("list", ListSchema);

module.exports = List;