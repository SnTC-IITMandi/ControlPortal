 const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hostelSchema = new Schema({
    hostel_name: { type: String, required: true },
    secretaries: [
        {
            name: { type: String, required: true },
            post: { type: String, required: true },
            email: { type: String, required: true },
        },
    ],
    warden: { 
        name:{type:String, required: true },
        email:{type:String, required: true },
     },
    assist_warden: { 
        name:{type:String , required: true },
        email:{type:String , required: true },
     },
    
});

const Hostels = mongoose.model('Hostel', hostelSchema);

module.exports = Hostels;
