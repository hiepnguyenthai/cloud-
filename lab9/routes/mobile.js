const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    MobileModel.find((err,data) => {
        if (!err) {
            res.render("index", { mobiles: data });
          }
    });
  });

  module.exports = router;
