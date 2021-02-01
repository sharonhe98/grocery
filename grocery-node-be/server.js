const express = require('express');
const app = express();
app.get('/', function(req, res) {
    res.send("hello world").then(console.log("server started!"));
});
app.listen(3000);
