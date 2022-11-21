const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    interestName: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    imageUrls: [{
        required: false,
        type: String
    }]
})
module.exports = mongoose.model('Interest', dataSchema)