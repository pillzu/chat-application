const express = require("express");
const router = express.Router();

router.get("/", (req, resp) => {
  resp.send("server is up and running now");
});

module.exports = router;
