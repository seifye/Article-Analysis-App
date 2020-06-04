const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_ID}`);
console.log(`Your API key is ${process.env.API_KEY}`);


// Require the Aylien npm package
var aylienAPI = require('aylien_textapi');

// set aylien API credentias
var textapi = new aylienAPI({
    application_id: `${process.env.API_ID}`,
    application_key: `${process.env.API_KEY}`
});


// Empty JS object as an endpoint
let projectData = {};

var path = require('path')

// Getting express package to run the server and the routes
const express = require('express')

// An instance of express
const app = express()

/* Middleware*/

// Dependencies: body-parser
const bodyParser = require('body-parser');

// using the body-parser as a middleware in the app
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Dependencies: cors
const cors = require('cors');

// using cors for cross origin allowance in the app
app.use(cors());

// Initialize the main project file
app.use(express.static('dist'))


// Route for a GET request
app.get('/', getData);
function getData(request, response) {
    response.sendFile('dist/index.html')
}


// Route for a POST request
app.post('/test', postData)
function postData(request, response) {
    let nameURL = request.body.input.url;
    console.log(request.body.input.url);
    textapi.sentiment({
        url: `${nameURL}`
    }, function (error, res) {
        if (error === null) {
            projectData['polarity'] = res.polarity;
            projectData['subjectivity'] = res.subjectivity;
            projectData['polarity_confidence'] = res.polarity_confidence;
            projectData['subjectivity_confidence'] = res.subjectivity_confidence;
            response.send(projectData);
        }
    });
};

// Setting up the Server on port: 8000
app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
})