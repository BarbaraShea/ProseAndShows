const router = require('express').Router();

const apiRoutes = require('./api');
const postsRoutes = require('./posts-routes.js')
const userInfo = require('./get-user.js')

router.use('/', postsRoutes)
router.use('/User', userInfo)
router.use('/api', apiRoutes);

module.exports = router;