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
    ///error logging
    if (err) throw err;
    let newData = JSON.parse(data);
    //Returns new database
    res.json(newData);
  });
});

// post route
app.post("/api/notes", (req, res) => {
  //grabs notes from body of request
  const newNote = req.body;

  //gives each note a random ID
  newNote.id = uuidv4();

  //adds the note object to the array
  db.push(newNote);

  //update the json file with the new object
  fs.writeFileSync("./db/db.json", JSON.stringify(db));

  //responds with the note object used
  res.json(db);
});

// set up server for app to run
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
