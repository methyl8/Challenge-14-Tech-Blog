const router = require('express').Router();

const apiRoutes = require('./api');
// const homeRoutes = require('./home-routes.js');

// router.use('/', homeRoutes);
router.get('/', (req, res) => {
    res.render("main")
});
// router.use('/api', apiRoutes);

module.exports = router;