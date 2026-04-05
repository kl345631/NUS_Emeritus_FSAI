const express = require("express");
const router = express.Router();

// In-memory data (same as Python version)
let students = [
  { id: 1, name: "Anita", course: "Python" },
  { id: 2, name: "Rahul", course: "Data Science" }
];

// GET all students
router.get("/", (req, res) => {
  res.json(students);
});

// POST add student
router.post("/", (req, res) => {
  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name: req.body.name,
    course: req.body.course
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT update student
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  student.name = req.body.name ?? student.name;
  student.course = req.body.course ?? student.course;

  res.json(student);
});

// DELETE student
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students.splice(index, 1);
  res.json({ message: "Student deleted" });
});

module.exports = router;
