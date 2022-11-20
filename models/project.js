const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    projectName: {
        required: true,
        type: String
    },
    url: {
        required: false,
        type: String
    },
    date: {
        required: false,
        type: Date
    },
    description: {
        required: false,
        type: String
    },
    technologies:[{ type: String }],
})

module.exports = mongoose.model('Project', dataSchema)