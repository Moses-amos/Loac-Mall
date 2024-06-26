const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 80
    },
    images: {
        type: Array,
        default: []
    },
    description: {
        type: String
    },
    subDescription: {
        type: String
    }
}, { timestamps: true })

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = { Notification }