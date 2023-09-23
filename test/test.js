const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/')
require('dotenv').config();
var cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use(cors());

try {
    var db = mysql.createConnection({
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    });
} catch (error) {
    console.log(error)
    console.log('\x1b[31m%s\x1b[0m',"CAN'T CONNECT TO DATABASE");
    process.exit();
}

console.log('\x1b[32m%s\x1b[0m',"CONNECTED TO DATABASE");

app.get('/', (req, res) => {
    res.send('Welcome to Libraverse! Plese use an POST endpoint');
});


var server = app.listen(3000);
module.exports = server;