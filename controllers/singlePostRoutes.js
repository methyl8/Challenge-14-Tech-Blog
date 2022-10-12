const router = require('express').Router();
const { Post, User, Comment } = require('../models')

router.get('/:id', async (req, res) => {
    try {
        if (!req.session.loggedIn) {
            res.redirect('/login')
        }
        else {
            const post = await Post.findByPk(req.params.id, {include: [{model: User}, {model: Comment}]});
            console.log(post.get({ plain: true }));

            res.render("single-post", { post: post.get({ plain: true }) })
            // res.render("single-post")
        }
    }
    catch (e) {
        res.status(500).json(e)
    }
});
 router.post('/', async (req, res) => {
    try {
        const newComment = Comment.create({
            postId: req.body.postId,
            body: req.body.body,
            userId: req.session.loginId
        });
        console.log(newComment);
        // res.redirect(`/post/${req.body.postId}`)
    }
    catch(e) {
        res.status(500).json("An error occurred")
    }
 });

module.exports = router;