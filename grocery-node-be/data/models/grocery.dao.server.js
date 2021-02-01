const mongoose = require('mongoose');
const grocerySchema = require('./grocery.schema.server');
const groceryModel = mongoose.model('GroceryModel', grocerySchema);
module.exports = groceryModel;
