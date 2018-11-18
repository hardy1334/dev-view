const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ msg2: "Posts works" });
});

module.exports = router;
