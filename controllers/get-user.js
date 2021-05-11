const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
  try {
    const dbPostData = await User.findAll(
    );
    
    res.status(200).json(dbPostData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: [
            'id',
            'user_name',
            'email',
            'password',
          ],
        },
      ],
    });

    const User = dbUserData.get({ plain: true });
    
    res.render('user', { User });
    
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
