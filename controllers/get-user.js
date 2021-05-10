const router = require('express').Router();
const { User } = require('../models');

router.get('/User', async (req, res) => {
  try {
    const dbPostData = await User.findAll(
      // include: [
      //   {
      //     attributes: ['user_name', 'email'],
      //   },
      // ],
    );
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/User/:id', async (req, res) => {
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

module.exports = router;
