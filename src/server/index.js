var path = require('path');
const express = require('express');
//const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

console.log(__dirname);

// Variables for url and api key

app.get('/', function (req, res) {
   // res.send("This is the server API page, you may access its services via the client app.");
    res.sendFile('dist/index.html')
});

app.get('/test', function (req, res) {
    res.send({'name':'json'});
});

// POST Route



// Designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8000!');
});

