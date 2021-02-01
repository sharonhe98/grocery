require('./db')();
let groceryDao = require('./models/grocery.dao.server');
groceryDao.find((err, groceries) => {
    console.log(groceries);
});
