module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'grocery';
    let connectionString = 'mongodb://localhost/';
    connectionString += databaseName;
    mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});
};
