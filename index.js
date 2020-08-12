// code away!
const express = require("express");
var morgan = require("morgan");
const userRouter = require("./users/userRouter");

const server = express();
const port = 4000;

server.use(express.json());

server.use(userRouter);
server.use(postRouter);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
