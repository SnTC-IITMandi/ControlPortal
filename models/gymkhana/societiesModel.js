const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const societySchema = new Schema({
    society_name: { type: String, required: true },
    society_website: { type: String },
    council_name: { type: String, required: true },
    advisor_name: { type: String, required: true },
    advisor_email: { type: String },
    coadvisor_name: { type: String },
    clubs: [
        {
            name: { type: String, required: true },
            email: { type: String },
            coordinators: [
                {
                    name: { type: String, required: true },
                    email: { type: String, required: true },
                    contact: { type: String, required: true },
                },
            ],
            faculty_advisor: { type: String },
            faculty_email: { type: String },
        },
    ],
});

const Societies = mongoose.model('Societies', societySchema);

module.exports = Societies;
