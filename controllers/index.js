const router = require('express').Router();

const apiRoutes = require('./api');
// new const for homepage routes

//router.use for homepage routes
router.use('/api', apiRoutes);

module.exports = router;