const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const mecanicienSchema = new Schema({
  
    name: {
        type: String,
    },
    adress: {
        type: String,
    },
    email: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    birthDate: {
        type: String,
    },

    image: { 
        type: String,
    
    },

}, { timestamps: true});


const Mecanicien = mongoose.model('Mecanicien', mecanicienSchema);

module.exports = Mecanicien