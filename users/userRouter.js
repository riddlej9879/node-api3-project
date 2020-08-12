const express = require("express");
const users = require("./userDb.js");
// const { checkUserID } = require('../middleware/user.js')

const router = express.Router();

router.get("/", (req, res) => {
  // do your magic!
});

router.get("/:id", validateUserId(), (req, res) => {
  // do your magic!
});

router.get("/:id/posts", validateUserId(), (req, res) => {
  // do your magic!
});

router.post("/", (req, res) => {
  // do your magic!
});

router.post("/:id/posts", validateUserId(), (req, res) => {
  // do your magic!
});

router.delete("/:id", validateUserId(), (req, res) => {
  // do your magic!
});

router.put("/:id", validateUserId(), (req, res) => {
  // do your magic!
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
