// DEPENDENCIES
const fs = require("fs");
const db = require("../../db/db.json");
const router = require("express").Router();
const uniqid = require("uniqid");

// get route for api router
router.get("/api/notes", (req, res) => {
  // use fs read file to send the data
  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

// post route for api router
router.post("/api/notes", (req, res) => {
  // variable to hold new note data
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    // unique id function
    id: uniqid(),
  };

  // use fs readFile to push the new data
  fs.readFile("./db/db.json", (req, res) => {
    if (err) throw err;

    let newData = JSON.parse(data);
    newData.push(newNote);

    // fs write file to update db with new data
    fs.writeFile("./db/db.json", JSON.stringify(newData), (err) => {
      if (err) throw err;
      res.send("New Data Added Successfully!");
    });
  });
});
