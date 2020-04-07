const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
//const path = require("path");
require("dotenv/config");

//MIDDLEWARES
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); // for parsing json
app.use(bodyParser.json());
app.use(express.static("views"));
// express.urlencoded();

// uploading files
app.use(fileUpload());

//Import Routes
const contactsRoute = require("./routes/contacts");
const usersRoute = require("./routes/users");
const uploadRoute = require("./routes/upload");

app.use("/posts/contacts", contactsRoute); // строка в браузере - фактически открытый файл
app.use("/posts/users", usersRoute);
app.use("/posts/upload", uploadRoute);

// connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Server has been started at port 3333")
);

// start
app.listen(3333);
