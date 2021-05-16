const router = require('express').Router();
const { User } = require("../../models")

// GET::api/user
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll(
        );
       
        const serializedUserData = userData.map((User) =>
        User.get({ plain: true })
    );
        res.status(200).json(serializedUserData)
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET::api/user/:id
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




router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!dbUserData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        req.session.save(() => {
            res
                .status(200)
                .json({ user: dbUserData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// POST::auth/logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


module.exports = router;
