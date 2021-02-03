require('./db')();
let groceryDao = require('./models/grocery.dao.server');
groceryDao.findAllGroceries().then(groceries => {
    console.log(groceries);
})
