const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Pug
app.set('view engine', 'pug');

// Routes
const studentRoutes = require('./routes/studentRoutes');
app.use('/', studentRoutes);

// Server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
