const router = require('express').Router();
const { Post } = require('../models');

router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: Post,
          attributes: ['category', 'title_of_work'],
        },
      ],
    });

    const homePosts = dbPostData.map((Post) =>
      Post.get({ plain: true })
    );
    
    res.render('homepage', {
      Post,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/Posts/:id', async (req, res) => {
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

    const Posts = dbPostData.get({ plain: true });
    
    res.render('posts', { Posts });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
