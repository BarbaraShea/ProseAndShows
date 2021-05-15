const router = require('express').Router();

router.use("/login", require("./login"))
router.use(require("./homepage"))
router.use("/recommendation", require("./recommendation"))

module.exports = router;