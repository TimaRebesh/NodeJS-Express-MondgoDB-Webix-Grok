const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.send("we are on upload");
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  try {
    // console.log("req.files >>>", req.files); // eslint-disable-line
    const sampleFile = req.files.sampleFile;
    const uploadPath = __dirname + "/../img/" + sampleFile.name;

    sampleFile.mv(uploadPath, function (err) {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200);
    });
    console.log("images id upload");
    return res.status(200);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
