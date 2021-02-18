require('../db')();
let mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
module.exports = function (app) {

    const groceryModel = require('../models/grocery.dao.server');

    const findAllGroceries = (req, res) => {
        groceryModel.findAllGroceries()
            .then(groceries => {
                res.send(groceries);
            })
    };

    const findGroceriesByUserId = (req, res) => {
        let uid = req.session['currentSession']._id;
        if (uid || req.session['currentSession'].role === 'ADMIN') {
            groceryModel.findGroceriesByUserId(uid).then(groceries => {
                res.send(groceries);
            })
        } else {
            res.status(404);
            res.send("Cannot access this list");
        }
    };

    const findGroceryById = (req, res) => {
        groceryModel.findGroceryById(req.params.gid).then(grocery => {
            res.send(grocery);
        })
    }

    const updateGrocery = (req, res) => {
        let gid = mongoose.Types.ObjectId(req.params.gid);
        let grocery = req.body;
        let uid = req.session['currentSession']._id;
        let userId = grocery.userId;
        if (uid === userId || req.session['currentSession'].role === 'ADMIN') {
            groceryModel.updateGrocery(gid, grocery).then(grocery => {
                res.send(grocery);
            });
        } else {
            res.status(404);
            res.send("Cannot access this grocery");
        }
    };

    const addGrocery = (req, res) => {
        let grocery = req.body;
        let uid = req.session['currentSession']._id;
        let userId = grocery.userId;
        if (uid === userId || req.session['currentSession'].role === 'ADMIN') {
            groceryModel.addGrocery(grocery).then(groc => {
                res.send(groc);
            })
        } else {
            res.status(404);
            res.send("Cannot add this grocery");
        }
    };

    const deleteGrocery = (req, res) => {
        let groceryId = mongoose.Types.ObjectId(req.params.gid);
        let uid = req.session['currentSession']._id;
        let userId = grocery.userId;
        if (uid === userId || req.session['currentSession'].role === 'ADMIN') {
            groceryModel.deleteGrocery(groceryId).then(grocery => {
                res.send(grocery);
            });
        } else {
            res.status(404);
            res.send("Cannot delete this grocery");
        }
    };

    app.get('/api/groceries', findAllGroceries);
    app.get('/api/groceries/:gid', findGroceryById);
    app.get('/api/groceries/', findGroceriesByUserId);
    app.put('/api/groceries/:gid', jsonParser, updateGrocery);
    app.post('/api/groceries', jsonParser, addGrocery);
    app.delete('/api/groceries/:gid', jsonParser, deleteGrocery);
};
