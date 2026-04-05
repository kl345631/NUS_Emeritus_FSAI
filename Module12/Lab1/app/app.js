const express = require('express'); 
const cors = require('cors') 
const app = express(); 
const port = 3001; 

app.use(cors()) 
app.use(express.json()) 


const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/products.db')


app.get('/products', function(req, res) {
    db.all('SELECT * FROM products order by product_id ASC', (err, rows) => {
    res.status(200).json(rows)
    })
});


app.listen(port, function () { 
    console.log(`Express app is listening on port ${port}!`); 
});