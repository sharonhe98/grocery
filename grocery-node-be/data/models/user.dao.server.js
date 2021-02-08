const mongoose = require('mongoose');
const userSchema = require('./user.schema.server');
const userModel = mongoose.model('UserModel', userSchema);

const findAllUsers = () => {
    return userModel.find();
};

const findUserById = (id) => {
    return userModel.findById(id);
};

const findUserByUsername = (username) => {
    return userModel.findOne({username});
};

const findUserByCredentials = (username, password) => {
    return userModel.findOne({username, password});
};

const updateUser = (userId, user) => {
    return userModel.updateOne({_id: userId}, user, {new: true, useFindAndModify: false});
};

const deleteUser = (userId) => {
    return userModel.deleteOne({_id: userId});
};

const addUser = (user) => {
    return userModel.create(user);
};

module.exports = {
    findAllUsers,
    findUserById,
    findUserByUsername,
    findUserByCredentials,
    updateUser,
    deleteUser,
    addUser
};
