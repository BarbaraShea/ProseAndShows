const router = require('express').Router();

router.use("/login", require("./login"))
router.use(require("./homepage"))

module.exports = router;