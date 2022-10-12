const router = require('express').Router();
const { Post, User } = require('../models')

router.get('/:id', async (req, res) => {
    try {
        if (!req.session.loggedIn) {
            res.redirect('/login')
        }
        else {
            const post = await Post.findByPk(req.params.id);
            res.render("edit-post", { post: post.get({ plain: true }) })
        }
    }
    catch (e) {
        res.status(500).json(e)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const delPost = await Post.destroy({ where: { id: req.params.id } })
        res.status(200).json('deleted')
    }
    catch (e) {
        res.status(500).json("An error occurred")
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updPost = await Post.update(
            {
                title: req.body.title,
                body: req.body.body
            },
            {
                where: { id: req.params.id }
            });
        res.status(200).json('updated');
    }
    catch (e) {
        res.status(500).json("An error occurred");
    }
});

module.exports = router;