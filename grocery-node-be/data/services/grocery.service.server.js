require('../db')();
module.exports = function (app) {

    const groceryModel = require('../models/grocery.dao.server');

    const findAllGroceries = (req, res) => {
        groceryModel.findAllGroceries()
            .then(groceries => {
                res.send(groceries);
            })
    };

    app.get('/api/groceries', findAllGroceries);
};
