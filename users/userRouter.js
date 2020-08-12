const express = require("express");
const userDb = require("./userDb.js");

const { validateUserId } = require("../middleware/validateUserId");

const router = express.Router();

router.get("/", (req, res) => {
  // do your magic!
  try {
    userDb.get().then((users) => {
      return res.status(200).json(users);
    });
  } catch (err) {
    return res.status(500).json({ message: "Error retrieving user database" });
  }
});

router.get("/:id", validateUserId(), (req, res) => {
  // do your magic!
  res.status(200).json(req.user);
});

router.get("/:id/posts", validateUserId(), (req, res) => {
  // do your magic!
  const userId = req.params.id;
  try {
    userDb.getUserPosts(userId).then((userPosts) => {
      if (userPosts.length === 0) {
        return res.status(404).json({ message: "User has no posts" });
      } else {
        return res.status(200).json(userPosts);
      }
    });
  } catch (err) {
    return res.status(500).json({ message: "Error retrieving posts" });
  }
});

router.post("/", (req, res) => {
  // do your magic!
  try {
  } catch {}
});

router.post("/:id/posts", (req, res) => {
  // do your magic!
  try {
  } catch {}
});

router.delete("/:id", (req, res) => {
  // do your magic!
  try {
  } catch {}
});

router.put("/:id", (req, res) => {
  // do your magic!
  try {
  } catch {}
});

//custom middleware

// function validateUserId(req, res, next) {
//   // do your magic!
//   users.getById(req.params.id).then((user) => {
//     if (user) {
//       req.user = user;
//       next();
//     } else {
//       res.status(400).json({ message: "invalid user id" });
//     }
//   });
// }

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
