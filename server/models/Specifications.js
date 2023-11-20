const mongoose = require('mongoose');

const specificationsSchema = mongoose.Schema({
    user: {
        type: Array,
        default: []
    },
    data: {
        type: Array,
        default: []
    },
    product: {
        type: Array,
        default: []
    }


}, { timestamps: true })


const Specifictions = mongoose.model('Specifictions', specificationsSchema);

module.exports = { Specifictions }