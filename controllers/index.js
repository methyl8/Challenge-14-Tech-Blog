const router = require('express').Router();

const apiRoutes = require('./api');
const mainRoutes = require('./mainRoutes.js');
const loginRoutes = require('./loginRoutes.js');
const signupRoutes = require('./signupRoutes.js');
const singlePostRoutes = require('./singlePostRoutes.js');
const updatePostRoutes = require('./updatePostRoutes.js');

router.use('/', mainRoutes);
// router.use('/api', apiRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
router.use('/post', singlePostRoutes);
router.use('/something', updatePostRoutes);

module.exports = router;