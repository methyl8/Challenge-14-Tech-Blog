const { User } = require('../models');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('login')
});

router.post('/', async (req, res) => {
    try {
        const user = await User.findOne({ where: { username: req.body.username } });
        if (user && user.checkPassword(req.body.password)) {
            req.session.save(() => {
                req.session.loggedIn = true;
                req.session.loginId = user.id;
                res.status(200).redirect('/');
            });
        }
        else {
            console.log('name or psd incorrect');
            res.status(404).redirect('/signup')
        }
        console.log(user, req.session.loggedIn);
    }
    catch (e) {
        res.status(500).json(e)
    }
})

module.exports = router;