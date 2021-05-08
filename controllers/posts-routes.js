const router = require('express').Router();
const { Post } = require('../models');

router.get('/', async (req, res) => {
  try {
    const dbPostData = await Posts.findAll({
      include: [
        {
          model: Posts,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const homePosts = dbPostData.map((Posts) =>
      Posts.get({ plain: true })
    );
    
    res.render('homepage', {
      posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/Posts/:id', async (req, res) => {
  try {
    const dbPostData = await Posts.findByPk(req.params.id, {
      include: [
        {
          model: Posts,
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
