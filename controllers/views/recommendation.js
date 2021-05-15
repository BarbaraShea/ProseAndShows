const moment = require("moment");
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.render('recommendation')
     } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;