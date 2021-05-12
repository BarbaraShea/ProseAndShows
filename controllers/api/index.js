const router = require('express').Router();

router.use("/post", require("./post"));
router.use("/user", require("./user"));

module.exports = router;
