const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: { type: String },
  address: {
    street: { type: String },
    suite: { type: String },
    city: { type: String },
    zipcode: { type: String }
  },
  phone: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("users", UsersSchema);
