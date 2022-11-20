const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    companyName: {
        required: true,
        type: String
    },
    companyUrl: {
        required: false,
        type: String
    },
    companyLogoUrl: {
        required: false,
        type: String
    },
    jobTitle: {
        required: true,
        type: String
    },
    startDate: {
        required: true,
        type: Date
    },
    endDate: {
        required: false,
        type: Date
    },
    description: {
        required: false,
        type: String
    },
    technologies:[{ type: String }],
})

module.exports = mongoose.model('Experience', dataSchema)