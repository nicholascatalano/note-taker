const fs = require("fs");
const db = require("../../db/db.json");
const router = require("express").Router();
const uniqid = require("uniqid");

router.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
