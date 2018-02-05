require('./config/config');

const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

var UserModel = require('./utils/queries');

var app = express();
const server = http.createServer(app);
const port = process.env.PORT;

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));
app.use(bodyParser.json());

app.get("/users/:field/:text", function(req,res){
    UserModel.getUsers(req.params.field, req.params.text, (error, data) => {
        if (typeof data !== 'undefined' && data.length > 0) res.send(data);
        else res.status(400).send({"msg":"notExist"});
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});