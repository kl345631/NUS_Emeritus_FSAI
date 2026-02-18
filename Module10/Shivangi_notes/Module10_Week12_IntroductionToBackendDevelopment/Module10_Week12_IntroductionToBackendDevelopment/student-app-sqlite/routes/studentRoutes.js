const express = require('express');
const db = require('../database/db');

const router = express.Router();

// Home – List students
router.get('/', (req, res) => {
  const students = db.prepare('SELECT * FROM students').all();
  res.render('index', { students });
});

// Add student page
router.get('/add', (req, res) => {
  res.render('add');
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
