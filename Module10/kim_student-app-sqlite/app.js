const express = require('express'); //import express framework
const bodyparser = require('body-parser'); //middleware to read from data
const app = express(); //

//Middleware 
app.use(bodyparser.urlencoded({extended: true})); //allows express to read from data
app.use(express.static('public')); //access everything in puplic folder

//PUG
app.set('view engine','pug'); //express to use PUG

//Routes
const studentRoutes = require('./routes/studentRoutes');
app.use('/', studentRoutes);

//Server port
app.listen(3000,() => {
    console.log('server running at http://localhost:3000');
});

