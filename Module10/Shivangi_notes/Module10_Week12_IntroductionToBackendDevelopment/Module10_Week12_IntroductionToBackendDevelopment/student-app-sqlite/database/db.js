const Database = require('better-sqlite3');

// Auto-creates database file
const db = new Database('./database/student.db');

// Create table
db.prepare(`
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    course TEXT
  )
`).run();

module.exports = db;
