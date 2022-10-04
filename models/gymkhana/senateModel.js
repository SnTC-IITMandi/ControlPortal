const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const senateSchema = new Schema({
    name: { type: String, required: true },
    rollno: { type: String, required: true },
    branch: { type: String, required: true },
    phoneno: { type: Number, required: true },
});

const Senate = mongoose.model("Senate", senateSchema);

module.exports = Senate;
