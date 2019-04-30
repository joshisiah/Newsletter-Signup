 //jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/signup.html');
});

app.post('/', function(req, res){
    let firstName = req.body.fName;
    let lastName = req.body.lName;
    let email = req.body.email;

    console.log(lastName + ' '+ firstName + ' ' + email);
});
app.listen(3000, function(){
    console.log('Server on port 3000 is now running');
});

app.lists
//API Key
//bcfb0e64c79c9d0947f69a2c723c0411-us20 

// List ID
// 8b4b8f7221
