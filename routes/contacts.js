const express = require("express");
const router = express.Router();
const Contacts = require("../modules/Contacts");

router.get("/", async (req, res) => {
  try {
    const contacts = await Contacts.find();
    res.json(contacts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/1", (req, res) => {
  res.send("next posts");
});

// POST - created new
router.post("/", async (req, res) => {
  console.log("POST - created new");
  const contacts = new Contacts({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Company: req.body.Company,
    Job: req.body.Job,
    Birthday: req.body.Birthday,
    Address: req.body.Address,
    Photo: req.body.Photo
  });
  try {
    const savePost = await contacts.save();
    res.json(savePost);
  } catch (err) {
    res.json({ message: err });
  }
});
// PUT - updated
router.put("/:postId", async (req, res) => {
  console.log("PUT - updated");
  try {
    const updateContacts = await Contacts.updateOne(
      { _id: req.body._id },
      {
        $set: {
          FirstName: req.body.FirstName,
          LastName: req.body.LastName,
          Company: req.body.Company,
          Job: req.body.Job,
          Birthday: req.body.Birthday,
          Address: req.body.Address,
          Photo: req.body.Photo
        }
      }
    );
    res.json(updateContacts);
  } catch (err) {
    res.json({ message: err });
  }
});
// DELETE
router.delete("/:postId", async (req, res) => {
  try {
    console.log("DELETED");
    const removedContacts = await Contacts.remove({ _id: req.body._id });
    res.json(removedContacts);
  } catch (err) {
    res.json({ message: err });
  }
});
// SPECIFIC POST
router.get("/:postId", async (req, res) => {
  try {
    const contacts = await Contacts.findById(req.params.postId);
    res.json(contacts);
  } catch (err) {
    res.json({ message: err });
  }
});
// UPDATE POST
router.patch("/", async (req, res) => {
  console.log("fired patch");
  // res.send('patch 123')
  try {
    const updateContacts = await Contacts.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          FirstName: req.body.FirstName,
          LastName: req.body.LastName,
          Company: req.body.Company,
          Job: req.body.Job,
          Birthday: req.body.Birthday,
          Address: req.body.Address,
          Photo: req.body.Photo
        }
      }
    );
    res.json(updateContacts);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
