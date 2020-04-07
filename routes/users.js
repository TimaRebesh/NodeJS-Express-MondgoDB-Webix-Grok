const express = require("express");
const router = express.Router();
const UsersSchema = require("../modules/Users");

router.get("/", async (req, res) => {
  try {
    const post = await UsersSchema.find();
    res.json(post);
    // res.send('we are on POST')
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
  const post = new UsersSchema({
    FirstName: req.body.title,
    LastName: req.body.description,
    Company: req.body.Company,
    Job: req.body.Job,
    Birthday: req.body.Birthday,
  });
  try {
    const savePost = await UsersSchema.save();
    res.json(savePost);
  } catch (err) {
    res.json({ message: err });
  }
});
// PUT - updated
router.put("/:postId", async (req, res) => {
  console.log("PUT - updated");
  try {
    const updatePost = await UsersSchema.updateOne(
      { _id: req.body._id },
      {
        $set: {
          name: req.body.name,
          username: req.body.username,
          email: req.body.email,
          phone: req.body.phone,
          company: req.body.company,
        },
      }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});
// DELETE
router.delete("/:postId", async (req, res) => {
  try {
    console.log("DELETED");
    const removedPost = await UsersSchema.remove({ _id: req.body._id });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});
// SPECIFIC POST
router.get("/:postId", async (req, res) => {
  try {
    const post = await UsersSchema.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});
// UPDATE POST
router.patch("/", async (req, res) => {
  console.log("fired patch");
  // res.send('patch 123')
  try {
    const updatePost = await UsersSchema.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          FirstName: req.body.FirstName,
          LastName: req.body.LastName,
          Company: req.body.Company,
          Job: req.body.Job,
          Birthday: req.body.Birthday,
        },
      }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
