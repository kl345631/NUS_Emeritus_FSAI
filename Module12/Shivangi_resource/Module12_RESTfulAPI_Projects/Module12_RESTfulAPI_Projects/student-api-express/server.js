const express = require("express");

const app = express();
const studentRoutes = require("./routes/students");

// Middleware to read JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Student API is running");
});


// Use student routes
app.use("/students", studentRoutes);

// Start server
app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
