const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>{
    res.send("ALL Shelters");
})
router.get("/new", (req, res) =>{
    res.send("Creating a new Shelter");
})
router.get("/:id", (req, res) =>{
    res.send("Viewing a particular Shelter");
})
router.get("/:id/edit", (req, res) =>{
    res.send("Editing a particular Shelter");
})

module.exports = router;