const express = require("express");
const router = express.Router();
const Post = require("../modules/Post");

router.get("/", async (req, res) => {
  try {
    const post = await Post.find();
    res.json(post);
    // res.send('we are on POST')
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
  const post = new Post({
    title: req.body.title,
    description: req.body.description,

    date: req.body.date
  });
  try {
    const savePost = await post.save();
    res.json(savePost);
  } catch (err) {
    res.json({ message: err });
  }
});
// PUT - updated
router.put("/:postId", async (req, res) => {
  console.log("PUT - updated");
  try {
    const updatePost = await Post.updateOne(
      { _id: req.body._id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description
        }
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
    const removedPost = await Post.remove({ _id: req.body._id });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});
// SPECIFIC POST
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
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
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          title: req.body.title,
          description: req.body.description
        }
      }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
