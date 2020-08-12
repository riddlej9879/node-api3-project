const userDb = require("../users/userDb");

function validateUserId() {
  return (req, res, next) => {
    userDb
      .getById(req.params.id)
      .then((user) => {
        if (user) {
          // attach the user data to the request
          // so we can access it later
          req.user = user;
          next();
        } else {
          res.status(404).json({
            message: "User not found",
          });
        }
      })
      .catch(next);
  };
}

module.exports = { validateUserId };
