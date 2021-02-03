const mongoose = require('mongoose');
const grocerySchema = require('./grocery.schema.server');
const groceryModel = mongoose.model('GroceryModel', grocerySchema);

findAllGroceries = () => {
    return groceryModel.find();
};

module.exports = {
    findAllGroceries,
};
