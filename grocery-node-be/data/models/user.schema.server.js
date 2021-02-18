const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    _id: String,
    username: String,
    password: String,
    role: { type: String, enum: ['ADMIN', 'USER'] }
}, {collection: 'users'});
module.exports = userSchema;
