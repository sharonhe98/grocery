require('../db');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

module.exports = function (app) {
    const userModel = require('../models/user.dao.server');

    const findAllUsers = (req, res) => {
        userModel.findAllUsers().then(users => {
            for (let i = 0; i < users.length; i++) {
                users[i].password = '';
            }
            res.send(users);
        })
    };

    const findUserById = (req, res) => {
        let uid = mongoose.Types.ObjectId(req.params['uid']);
        userModel.findUserById(uid).then(user => {
            res.send(user);
        });
    };

    const findUserByUsername = (req, res) => {
        let username = mongoose.Types.ObjectId(req.params['uid']);
        userModel.findUserByUsername(username).then(user => {
            res.send(user);
        });
    };

    const updateUser = (req, res) => {
        let uid = mongoose.Types.ObjectId(req.params['uid']);
        let newUser = req.body;
        userModel.updateUser(uid, newUser).then(user => {
            res.send(user);
        });
    };

    const deleteUser = (req, res) => {
        let uid = mongoose.Types.ObjectId(req.params['uid']);
        userModel.deleteUser(uid).then(user => {
            res.send(user);
        });
    };

    const addUser = (req, res) => {
        let user = req.body;
        userModel.addUser(user).then(newUser => {
            res.session['currentUser'] = user;
            res.send(newUser);
        });
    };

    const login = (req, res) => {
        const user = req.body;
        let username = user.username;
        let pw = user.password;
        userModel.findUserByCredentials(username, pw).then(curUser => {
            if (curUser === null) {
                res.status(404);
                res.send("Failed Login");
            } else {
                curUser.password = '';
                req.session['currentUser'] = curUser;
                res.json(curUser);
            }
        })
    }

    const logout = (req, res) => {
        req.session.destroy((err) => {
            res.send("Logged out");
        })
    };

    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
    app.get('/api/users/:username', findUserByUsername);
    app.put('/api/users/:uid', jsonParser, updateUser);
    app.delete('/api/users/:uid', jsonParser, deleteUser);
    app.post('/api/users', jsonParser, addUser);
    app.post('/api/users', jsonParser, login);
    app.post('/api/users', jsonParser, logout);
};
