const express = require('express');
const app = express();
const session = require('express-session');

require('./data/db')();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "http://localhost:4200");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'HLFtw1ce@t!me',
    rolling: true,
    cookie: { maxAge: 1800000 }
}));

app.get('/', function(req, res) {
    console.log(res);
    res.send("hello world");
});

const groceryService = require('./data/services/grocery.service.server');
groceryService(app);
const userService = require('./data/services/user.service.server');
userService(app);
app.listen(3000);
