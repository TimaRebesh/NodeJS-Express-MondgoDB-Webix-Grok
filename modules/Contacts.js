const mongoose = require("mongoose");

const ContactsSchema = mongoose.Schema({
  FirstName: {
    type: String,
    required: true
  },
  LastName: {
    type: String,
    required: true
  },
  Company: {
    type: String,
    required: true
  },
  Job: {
    type: String,
    required: true
  },
  Birthday: {
    type: String,
    required: true
  },
  Address: { type: String },
  Photo: { type: String }
});

module.exports = mongoose.model("contacts", ContactsSchema);
