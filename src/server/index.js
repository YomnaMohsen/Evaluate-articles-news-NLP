const get_articles = require('./get_data');
const json = require('./json');
var path = require('path');
const express = require('express');
//const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const cors = require('cors');

const API_KEY = process.env.API_KEY;
const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1';
// url format  `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`



app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

console.log(__dirname);

// Variables for url and api key

app.get('/', function (req, res) {
   // res.send("This is the server API page, you may access its services via the client app.");
    res.sendFile('dist/index.html')
});


// POST Route
app.post('/api', async function (req, res) {
    const CompleteUrl =`${BASE_API_URL}?key=${API_KEY}&url=${req.body.url}&lang=en`;
    const analysis = await get_articles(CompleteUrl);
    res.send({sentiment: analysis});
});





// Designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!');
});


