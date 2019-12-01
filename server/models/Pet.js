const mongoose = require("mongoose");
const Schema   = mongoose.Schema; 

const petSchema = new Schema (
  {
    petType: {
      type: String,
    },
    location: {
      type: String,
    },
    breed: {
      type: String,
    },
    gender: {
      type: String,
    },
    refId: {
      type: String,
    },
    dob: {
      type: String,
    },
    name: {
      type: String,
    },
    img: {
      type: String,
    },
  }
)

const Pet = mongoose.model("Pet", petSchema);
module.exports = Pet;