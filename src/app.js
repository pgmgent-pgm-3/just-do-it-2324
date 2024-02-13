// import statements
import express from "express";
import path from "path";

// app setup
const app = express();
const port = 3456;

// routes
app.get("/", (req, res) => {
  // res.send("Hello World!");
  const pathToHTML = path.resolve("src", "views", "index.html");
  res.sendFile(pathToHTML);
});

// server setup
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
