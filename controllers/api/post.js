const router = require('express').Router();
const { Post } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll(
        );

        const homePosts = dbPostData.map((Post) =>
            Post.get({ plain: true })
        );
        res.status(200).json(homePosts)
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

        const serializedpost = dbPostData.get({ plain: true });

        res.render('posts', serializedpost);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/create', async (req, res) => {
    try {
        const dbPostData = await Post.create({
            category: req.body.category,
            title_of_work: req.body.title_of_work,
            genre_tag: req.body.genre_tag,
            tag: req.body.tag,
            contents: req.body.contents
        });

        req.session.save(() => {
            res.status(200).json(dbPostData);
        });
    } catch (err) {
        console.log(err);
    
        res.status(500).json(err);
    }
});

router.get('/genre_tag/:id', async (req, res) => {
    var id = req.params.id;

    let posts = await Post.findAll({genre_tag: id}).exec();

    res.render('genre_tag', { 
        posts: posts
    });
});

module.exports = router;
