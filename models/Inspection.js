const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const inspectionSchema = new Schema({
   
    mecanicien: {
        type: String,
    },
    annonce: {
        type: String,
    },
    utilisateur: {
        type: String,
    },
    moteur: {
        type: String,
    },
    transmission: {
        type: String,
    },
    roues: {
        type: String,
    },
    historique: {
        type: String,
    },
    date: {
        type: String,
    },
}, { timestamps: true});

const Inspection = mongoose.model('Inspection', inspectionSchema);

module.exports = Inspection