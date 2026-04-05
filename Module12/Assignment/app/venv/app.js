const express = require("express");
const port = 8000;
const app = express();

app.use(express.json());

// Import the router and mount it at the '/students' path
const studentRoutes = require("./routes/students"); 
// Use student routes
app.use("/students", studentRoutes);


// Middleware to read JSON (for POST and PUT)
app.use(express.json());


// home route
app.get("/", (req, res) => {
  res.send("Welcome to the Student API! Go to /students to see the list.");
});


// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

