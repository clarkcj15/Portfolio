const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
    title: {type: String},
    link: {type: String},
    img: {type: String},
    description: {type: String},
    isComplete: Boolean
})

module.exports = mongoose.model('Items', itemSchema);