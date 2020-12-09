const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    isComplete: Boolean
})

module.exports = mongoose.model('Items', itemSchema);