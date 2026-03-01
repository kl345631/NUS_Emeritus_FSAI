const express = require('express');
const db = require('../database/db'); //import the db 

const router = express.Router();

// Home – fetch students records
router.get('/', (req, res) => {
  const students = db.prepare('SELECT * FROM students').all();
  res.render('index', { students }); //sending data to PUG
});

// Add student page
router.get('/add', (req, res) => { //show add student form
  res.render('add');        //loads add.pug
});

// Insert student
router.post('/add', (req, res) => {
  const { name, age, course } = req.body;
  db.prepare(
    'INSERT INTO students (name, age, course) VALUES (?, ?, ?)'
  ).run(name, age, course);
  res.redirect('/');
});

// Delete student
router.get('/delete/:id', (req, res) => {
  db.prepare('DELETE FROM students WHERE id = ?')
    .run(req.params.id);
  res.redirect('/');
});

module.exports = router;
