const router = require('express').Router();
const { Post, User } = require('../models')

router.get('/', async (req, res) => {
    try {
        const allPostsDB = await Post.findAll({
            include: [{model: User}]
        });
        const posts = allPostsDB.map((post) => post.get({ plain:true }))
        console.log(posts);
        res.render("all-posts", {posts})
    }
    catch (e) {
        res.status(500).json(e)
    }
});

module.exports = router;