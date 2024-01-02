// DEPENDENCIES
const fs = require("fs");
const path = require("path");
const express = require("express");
const db = require("./db/db.json");
const { v4: uuidv4 } = require("uuid");

const app = express();

const PORT = process.env.PORT || 3001;

// Middleware

// express creates route for files in public folder, giving a route of '/'
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API Routes

// get route
app.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    // if error, throw
    if (err) throw err;
    let newData = JSON.parse(data);
    // new data is returned in JSON
    res.json(newData);
  });
});

// post route
app.post("/api/notes", (req, res) => {
  // saves body of request to newNote const
  const newNote = req.body;

  // uses npm uuidv4 to add unique id to newNote
  newNote.id = uuidv4();

  // pushes new note to db.json
  db.push(newNote);

  // rewrites file using new database
  fs.writeFileSync("./db/db.json", JSON.stringify(db));

  // returns new json object
  res.json(db);
});

// HTML Routes

// get route for home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
// get route for notes page
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});
// get route for wildcard page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// set up server for app to run
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
