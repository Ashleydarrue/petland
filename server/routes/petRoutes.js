const express = require("express");
const router = express.Router();
const Pet = require("../models/Pet");
// const mongoose = require("mongoose");


//this route will return all the Pets in the database
router.get( '/pets', (req, res, next) => {
  Pet.find()
  .then(allPets => {
    console.log(allPets);
      res.json(allPets)
    })
    .catch(err => {
      res.json(err);
    });
});


module.exports = router;