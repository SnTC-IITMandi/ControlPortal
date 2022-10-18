 const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hostelSchema = new Schema({
    hostel_name: { type: String, required: true },
    secretaries: [
        {
            name: { type: String, required: true },
            post: { type: String, required: true },
            email: { type: String, required: true },
            warden: { type: String },
            warden_email: { type: String },
        },
    ],
});

const Hostels = mongoose.model('Hostel', hostelSchema);

module.exports = Hostels;
