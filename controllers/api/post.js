const router = require('express').Router();
const { Post } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll(
        );

        const homePosts = dbPostData.map((Post) =>
            Post.get({ plain: true })
        );
        res.status(200).json(dbPostData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Post,
                    attributes: [
                        'id',
                        'category',
                        'title_of_work',
                        'genre_tag',
                        'tag',
                        'contents',
                        'date_created',
                        'user_name',
                        'userId'
                    ],
                },
            ],
        });

        const Post = dbPostData.get({ plain: true });

        res.render('posts', { Post });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;