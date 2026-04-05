const express = require ("express");
const dotenv = require ("dotenv");
const connectDB = require('./config/db');

//load env vars
dotenv.config({path:'./config/config.env'});

//initialise with express
const app = express();

// Call the connection function
connectDB();

//route using express
app.get('/',(req,res)=> {
    res.send('<h1> Hello from Express </h1>')
});

const PORT = process.env.PORT || 5000;

app.listen (
    PORT,
    console.log('Server running on ' + process.env.NODE_ENV + 'mode on port ' + PORT)
);