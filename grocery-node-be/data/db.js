module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'grocery';
    let connectionString = `mongodb+srv://admin:admin%40n00Hor1zon@grocery-cluster.xab9d.mongodb.net/${databaseName}?retryWrites=true&w=majority`;
    //connectionString += databaseName;
    mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});
};
