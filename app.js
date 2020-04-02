const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv/config");

//MIDDLEWARES
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); // for parsing json
app.use(bodyParser.json());
app.use(express.static("views"));
// express.urlencoded();
//Import Routes
const postsRoute = require("./routes/posts");
const someRoute = require("./routes/some");

app.use("/posts", postsRoute); // строка в браузере - фактически открытый файл
app.use("/some", someRoute);

// routes

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname+'/views/main.html'));
// });

// connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("Server has been started at port 3003")
);

// start
app.listen(3003);
