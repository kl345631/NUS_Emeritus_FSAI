const express = require("express");
const router = express.Router();

// In-memory data for students list, instead of DB
let students = [
  { id: 1, name: "Tom", course: "Python" },
  { id: 2, name: "Jerry", course: "Data Science" },
  { id: 3, name: "Harry", course: "C++" }
];

// GET all students
router.get("/", (req, res) => {
  res.json(students);
});

// POST add student
router.post("/", (req, res) => {

  // check: If name or course is missing.
  if (!req.body.name || !req.body.course) {
    return res.status(400).json({ message: "Please provide both name and course!" });
  }

// Generate ID: take the last student's ID and add 1
  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name: req.body.name,
    course: req.body.course
  };

  students.push(newStudent);
  res.status(201).json({
    student: newStudent,
    message: "Student added successfully"});

    
});

// PUT update existing student
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  // Update the student fields: name or course
  student.name = req.body.name ?? student.name;
  student.course = req.body.course ?? student.course;

  // write data back to student
  res.json(student); 
});

// DELETE student
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  //Find the index (position) of the student in the array
  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found!" });
  }

  //Remove 1 item at that index and Confirm deletion
  students.splice(index, 1);
  res.json({ message: "Student successfully deleted!" });
});
    

module.exports = router;
