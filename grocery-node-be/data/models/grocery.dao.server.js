const mongoose = require('mongoose');
const grocerySchema = require('./grocery.schema.server');
const groceryModel = mongoose.model('GroceryModel', grocerySchema);

findAllGroceries = () => {
    return groceryModel.find();
};

findGroceryById = (id) => {
    return groceryModel.find({_id: id});
}

updateGrocery = (id, grocery) => {
    return groceryModel.findOneAndUpdate({_id: id}, grocery, {new: true, useFindAndModify: false});
};

addGrocery = (grocery) => {
    return groceryModel.create(grocery);
}

module.exports = {
    findAllGroceries,
    findGroceryById,
    updateGrocery,
    addGrocery,
};
