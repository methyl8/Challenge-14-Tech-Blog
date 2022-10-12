const router = require('express').Router();

const apiRoutes = require('./api');
const mainRoutes = require('./mainRoutes.js');
const loginRoutes = require('./loginRoutes.js');
const signupRoutes = require('./signuproutes.js')

router.use('/', mainRoutes);
// router.use('/api', apiRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);

module.exports = router;