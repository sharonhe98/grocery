require('./db')();
// let groceryDao = require('./models/grocery.dao.server');
// groceryDao.findAllGroceries().then(groceries => {
//     console.log(groceries);
// })
let userDao = require('./models/user.dao.server');
userDao.findAllUsers().then(users => {console.log(users)});
