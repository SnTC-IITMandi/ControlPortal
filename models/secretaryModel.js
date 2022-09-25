const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const secSchema = new Schema({
    name: { type: String, required: true },
    post: { type: String, required: true },
    facebook: { type: String, required: false },
    email: { type: String, required: true },
    img: { data: Buffer, contentType: String },
    year: { type: Number, required: true },
});

const Secretary = mongoose.model("Secretary", secSchema);

module.exports = Secretary;
