// import statements
import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

// livereload imports
import livereload from "livereload";
import connect from "connect-livereload";

// app setup
const app = express();
const port = process.env.PORT || 4000;

// livereload setup
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
liveReloadServer.watch(path.resolve("public"));
app.use(connect());

// publicly available files
app.use(express.static("public"));

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
