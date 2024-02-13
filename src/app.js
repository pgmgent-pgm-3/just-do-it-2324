// import statements
import express from "express";

// app setup
const app = express();
const port = 3456;

// routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// server setup
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
