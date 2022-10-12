const router = require('express').Router();

const apiRoutes = require('./api');
const mainRoutes = require('./mainRoutes.js');
const loginRoutes = require('./loginRoutes.js');
const signupRoutes = require('./signupRoutes.js');
const postRoutes = require('./postRoutes.js');

router.use('/', mainRoutes);
// router.use('/api', apiRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
router.use('/post', postRoutes)

module.exports = router;