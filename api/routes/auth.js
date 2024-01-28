const express = require("express");
const UserController = require("../controller/auth.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello, this is auth endpoint");
});
// router.post("/register", (req, res) => {
//   res.send("register page");
// });
router.get("/register", UserController.register);
router.get("/login", UserController.login);

module.exports = router;
