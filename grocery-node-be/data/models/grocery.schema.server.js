const mongoose = require('mongoose');
const grocerySchema = mongoose.Schema({
    name: String,
    amount: Number,
    desc: String,
    low: Boolean,
    userId: String
}, {collection: 'groceries'});
module.exports = grocerySchema;
