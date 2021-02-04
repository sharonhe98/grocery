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

    const findGroceryById = (req, res) => {
        groceryModel.findGroceryById(req.params.gid).then(grocery => {
            res.send(grocery);
        })
    }

    const updateGrocery = (req, res) => {
        let gid = mongoose.Types.ObjectId(req.params.gid);
        let grocery = req.body;
        groceryModel.updateGrocery(gid, grocery).then(grocery => {
            res.send(grocery);
        });
    };

    const addGrocery = (req, res) => {
        let grocery = req.body;
        groceryModel.addGrocery(grocery).then(groc => {
            res.send(groc);
        })
    }

    app.get('/api/groceries', findAllGroceries);
    app.get('/api/groceries/:gid', findGroceryById);
    app.put('/api/groceries/:gid', jsonParser, updateGrocery);
    app.post('/api/groceries', jsonParser, addGrocery);
};
