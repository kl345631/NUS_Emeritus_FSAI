const database = require('better-sqlite3')

// auto create new students database
const db = new database('./database/student.db');

// Create table; use prepare function
db.prepare(`
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    course TEXT
  )
`).run();

module.exports = db;