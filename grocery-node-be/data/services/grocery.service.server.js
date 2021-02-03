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
        console.log(req);
        groceryModel.updateGrocery(gid, grocery).then(grocery => {
            res.send(grocery);
        });
    };

    app.get('/api/groceries', findAllGroceries);
    app.get('/api/groceries/:gid', findGroceryById);
    app.put('/api/groceries/:gid', jsonParser, updateGrocery);
};
