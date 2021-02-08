const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    _id: String,
    username: String,
    password: String,
}, {collection: 'users'});
module.exports = userSchema;
