// DEPENDENCIES
const fs = require("fs");
const db = require("../../db/db.json");
const router = require("express").Router();
const uniqid = require("uniqid");

// get route for api router
router.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

// post route for api router
router.post("/api/notes", (req, res) => {
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uniqid(),
  };

  fs.readFile("./db/db.json", (req, res) => {
    if (err) throw err;
  });
});
