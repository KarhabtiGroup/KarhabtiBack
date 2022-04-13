const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const sponsorsSchema = new Schema({
    name: {
        type: String,
    },
    lien: {
        type: String,
    },
}, { timestamps: true});

const Sponsors = mongoose.model('Sponsors', sponsorsSchema);

module.exports = Sponsors