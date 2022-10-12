const { User } = require('../models');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('signup')
});

router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        req.session.save(() => {
                req.session.loggedIn = true;
                req.session.loginId = user.id;
                res.status(200).redirect('/');
            });
        console.log(user, req.session.loggedIn);
    }
    catch (e) {
        res.status(500).json(e)
    }
})

module.exports = router;